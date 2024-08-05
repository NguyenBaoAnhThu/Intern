import React from 'react';
import ContentHome from '~/components/Content/ContentHome';
import NavLinks from '~/components/NavLinks';

function Home() {
  return (
    <div >
      <ContentHome />
      <NavLinks
        olderPost="Older Posts"
        showNewerPosts={false}
        showOlderPosts={true}
        olderPostsLink="/Home/Page/2"
      />
    </div>
  );
}

export default Home;
