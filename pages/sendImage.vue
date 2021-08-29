<template>
  <div>
    <input type="file" @change="previewImage"><br>
    <div v-if="preview">
      <img :src="preview" />
    </div>
    <button @click="sendImage">Upload</button>
  </div>
</template>

<script>
import firebase from "@/plugins/firebase";
export default {
  data() {
    return {
      preview: "",
      image: ""
    }
  },
  methods: {
    previewImage (e) {
      this.image = e.target.files[0]
      if(this.image.length === 0) {
        this.reset();
        return false;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        this.preview = e.target.result;
      }
      reader.readAsDataURL(this.image)
    },
    sendImage () {
      const storage = firebase.storage();
      const storageRef = storage.ref().child("image")
      storageRef.put(this.image)
      .then(res => alert("画像を送信しました"))
      .catch(e => alert("画像の送信ができませんでした"))
    }
  },
}
</script>