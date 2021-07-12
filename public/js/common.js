$("#submitPostButton").click(async () => {
  const postText = $("#post-text").val();
  console.log(postText);
  
  await axios.post("/api/post", { content: postText });
  $("#post-text").val("");
});
