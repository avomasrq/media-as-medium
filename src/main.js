import React from 'react';
import Article from './Article';
import macImage from './Img.png';
import nigImage from './nig.png';
import paintingImage from './painting.png';
function Main() {
  const customArticles = [
    {
      userId: 1,
      id: 1,
      title: "7 Practical CSS Tips",
      body: "You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.",
      imageUrl: macImage,
    },
    {
      userId: 1,
      id: 2,
      title: "7 Practical CSS Tips",
      body: "Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced. You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your Python skills. To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks...",
      imageUrl: nigImage,
    },
    {
      userId: 1,
      id: 3,
      title: "7 Practical CSS Tips",
      body: "Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced. You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your Python skills. To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks...   ",
      imageUrl: paintingImage,
    },
  ];

  return (
    <main>
      <div className="container my-5 fs-2">Hello, World!</div>
      <div className="container" id="articles">
        {customArticles.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </div>
    </main>
  );
}

export default Main;