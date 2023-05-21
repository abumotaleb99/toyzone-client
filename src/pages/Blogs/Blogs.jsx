import React from "react";

const Blogs = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-5 md:px-0 pb-5">
      <h2 className="text-[#1A1919] text-3xl font-bold text-center  py-12">
        Blogs
      </h2>

      <div>
        <h3 className="text-[#474747] font-semibold pb-2">
          1. What is an access token and refresh token? How do they work and
          where should we store them on the client-side?
        </h3>
        <p className="text-[#757575] font-normal">
          A refresh token just helps you re-validate a user without them having
          to re-enter their login credentials multiple times. The access token
          is re-issued, provided the refresh token is a valid one requesting
          permission to access confidential resources.
        </p>
        <p className="text-[#757575] font-normal pb-4">
          A refresh token allows the user to get a new access token without
          needing to log in again. Access token and refresh token shouldn't be
          stored in the local/session storage, because they are not a place for
          any sensitive data. Hence I would store the access token in a httpOnly
          cookie (even though there is CSRF) and I need it for most of my
          requests to the Resource Server anyway.
        </p>
        <h3 className="text-[#474747] font-semibold">
          2. Compare SQL and NoSQL databases?
        </h3>
        <p className="text-[#757575] font-normal pb-4">
          SQL databases are vertically scalable, while NoSQL databases are
          horizontally scalable. SQL databases are table-based, while NoSQL
          databases are document, key-value, graph, or wide-column stores.
        </p>
        <h3 className="text-[#474747] font-semibold">
          3. What is express js? What is Nest JS?
        </h3>
        <p className="text-[#757575] font-normal">
          Express is a minimal and flexible Node.js web application framework
          that provides a robust set of features for web and mobile
          applications.
        </p>
        <p className="text-[#757575] font-normal pb-4">
          Nest. js is one of the fastest-growing Node. js frameworks for
          building efficient, scalable, and enterprise-grade backend
          applications using Node. js.
        </p>
        <h3 className="text-[#474747] font-semibold">
          4. What is MongoDB aggregate and how does it work?
        </h3>
        <p className="text-[#757575] font-normal pb-2">
          Aggregation is a way of processing a large number of documents in a
          collection by means of passing them through different stages. The
          stages make up what is known as a pipeline. The stages in a pipeline
          can filter, sort, group, reshape and modify documents that pass
          through the pipeline. The aggregator is simply a website that creates
          a brand and also creates partnerships with the actual service
          providers. The job of the aggregator is to collect information from
          various service providers, display them on their websites and sell the
          product.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
