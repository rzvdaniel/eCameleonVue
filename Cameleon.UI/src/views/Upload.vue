<template>
  <form id="uploadForm"
        enctype="multipart/form-data"
        action="/api/photo"
        method="post">
    <input type="file" name="userPhoto" multiple />
    <input type="submit" value="Upload Image" name="submit">
    <input type='text' id='random' name='random'><br>
    <span id = "status"></span>
  </form>
</template>
