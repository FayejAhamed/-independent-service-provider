import React from 'react';

const Blogs = () => {
    return (
        <div className='container g-3 ' style={{height:'80vh'}}>
            <div>
                <h2> Difference between authorization and authentication?</h2>
                <p>Both Authentication and Authorization area unit utilized in respect of knowledge security that permits the safety on an automatic data system. Each area unit terribly crucial topics usually related to the online as key items of its service infrastructure. However, each the terms area unit terribly completely different with altogether different ideas. whereas it's true that they're usually employed in an equivalent context with an equivalent tool, they're utterly distinct from one another.

                    In authentication process, the identity of users are checked for providing the access to the system. While in authorization process, person's or user's authorities are checked for accessing the resources. Authentication is done before the authorization process, whereas authorization process is done after the authentication process.</p>

            </div>
            <div>
                <h2> Why are you using firebase? What other options do you have to implement authentication?</h2>
                <p>Google Firebase offers many features that pitch it as the go-to backend development tool for web and mobile apps. It reduces development workload and time. And it's a perfect prototyping tool. Firebase is simple, lightweight, friendly, and industrially recognized.</p>
                <p>
                    Auth0. A set of unified APIs and tools that instantly enables Single Sign On and user management to all your applications. ...
                    MongoDB. MongoDB stores data in JSON-like documents that can vary in structure, offering. ...
                    Passport. ...
                    Okta. ...
                    JSON Web Token. ...
                    Amazon Cognito. ...
                    Keycloak.
                    AWS Amplify
                    Couchbase
                </p>
            </div>
            <div><h2>What other services does firebase provide other than authentication</h2>
                <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.

Firebase Authentication integrates tightly with other Firebase services, and it leverages industry standards like OAuth 2.0 and OpenID Connect, so it can be easily integrated with your custom backend.</p>
            </div>
        </div>
    );
};

export default Blogs;