// Routers class
class Routers {
  constructor(
    router,
    dependencies = {
      models: { POST: null, },
    }
  ) {
    this.router = router;
    this.dependencies = dependencies;
    this.error_msg = null;
    this.data = null;
  }

  // Logging or printing messages
  print(msg) {
    console.log(msg);
  }

  // Format numbers
  numFormatter(num) {
    if (num > 999 && num < 1000000) {
      return (num / 1000).toFixed(1) + "K"; // convert to K for number from > 1000 < 1 million
    } else if (num > 1000000 && num < 999999) {
      return (num / 1000000).toFixed(1) + "M"; // convert to M for number from > 1 million
    } else if (num > 1000000000) {
      return (num / 1000000000).toFixed(1) + "B"; // convert to B for number from > 1 billion
    } else if (num < 900) {
      return num; // if value < 1000, nothing to do
    }
  }

  // Create a unique array (Without duplicate elements/items)
  uniqueArr(val, ind, arr) {
    return arr.indexOf(val) === ind;
  }

  // Results when searching for posts
  postResults() {
    const Post = this.dependencies.models.POST;

    this.router.get("/post/search", async (req, res) => {
      // Input value from form
      const { q } = req.query,
        inputQuery = q.toLowerCase();

        const postData = await Post.find({})

        if (!postData) {
          return res.status(404).json({ err: "Post not found!" });
        } else {
          // Making a regular expresssion for finding posts
          let regex = new RegExp(inputQuery.toLowerCase(), "i");

          // Storing the item(s) that match the search in a variable
          const filteredPosts = postData
            .filter((item) => {
              if (item) {
                // Checking if the searched query matches the name and the
                // category of a Post
                if (
                  regex.test(item.text) ||
                  regex.test(item.tags)
                ) {
                  return item;
                } else {
                  // Skipping all item(s) if they don't match the search
                  return false;
                }
              }
            })
            .map((item) => item);

          return res.status(200).json({
            posts: filteredPosts,
          });
        }
    });
  }

  // Get the hashtags matching the input hashtag/tags (#/@)
  getTags(){
    const Post = this.dependencies.models.POST;

    this.router.get("/post/tags", async (req, res) => {
      // Input value from form
      const { q } = req.query,
      inputQuery = q.toLowerCase();
      
      
      const postData = await Post.find({})

        if (!postData) {
          return res.status(404).json({ err: "Post not found!" });
        } else {
          // Making a regular expresssion for finding posts
          let regex = new RegExp(inputQuery.toLowerCase(), "i");

          // Get the tags from all posts
          let tags = [];

          
          postData.forEach((item) =>{
            tags = [...tags, ...item.tags]
          })

          tags = tags.filter(this.uniqueArr);

          // Storing the item(s) that match the search
          const filteredPosts = tags
            .filter((item) => {
              if (item) {
                // Checking if the searched query matches the tags
                if (
                  regex.test(item)
                ) {
                  return item;
                } else {
                  // Skipping all item(s) if they don't match the search
                  return false;
                }
              }
            })
            .map((item) => item);

          return res.status(200).json({
            tags: filteredPosts,
          });
        }
    });
  }
}

module.exports = Routers;
