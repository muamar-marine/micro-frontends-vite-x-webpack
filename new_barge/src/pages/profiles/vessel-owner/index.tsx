import React from 'react';

// @ts-expect-error Error types
const DefaultLayout = React.lazy(() => import('shell/layouts/default'));

const ProfileVesselOwnerPage = () => {
  return (
    <DefaultLayout>
      <section>
        <h1>Profiles Page</h1>
        <p>
          Eu enim consectetur deserunt voluptate consectetur labore Lorem nisi
          mollit in reprehenderit sunt pariatur.
        </p>
      </section>
    </DefaultLayout>
  );
};

export default ProfileVesselOwnerPage;
