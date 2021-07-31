import React from "react";
import Helmet from "react-helmet";
const HelmetComponent = ({ title, favIcon, og }) => {
  const host = window.location.origin;
  return (
    <Helmet>
      <meta charset="utf-8" />
      <link rel="icon" href={favIcon} />
      <meta
        name="viewport"
        content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <meta name="theme-color" content="#000000" />
      <meta name="description" content={og.description} />
      <meta property="og:title" content={og.title} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${host}${og.image}`} />
      <meta
        name="facebook-domain-verification"
        content="4cjdontnjx65dl20n9mmmgms4rn96k"
      />
      <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />

      <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

      <title>{title}</title>
    </Helmet>
  );
};

export default HelmetComponent;
