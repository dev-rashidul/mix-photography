import React from "react";
import { Accordion, Container } from "react-bootstrap";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog">
      <div className="text-center pb-5">
        <h2>Blog</h2>
      </div>
      <Container>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Difference between SQL and NoSQL?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                SQL : SQL or the Structured Query Language is the most common
                and popular programming language for the relational database
                management system (RDBMS). It is a language designed to extract,
                store, insert, delete, update and manage data for structured
                data and strategic analysis.
              </p>
              <p>
                NoSQL : NoSQL database are primarily called as non-relational or
                distributed database. It provides a mechanism for storage and
                retrieval of data that is modelled other than tabular form. It
                is not limited to storing data in tables, instead, enables the
                big data to be stored in the structured, unstructured,
                semi-structured or polymorphic form.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              What is JWT, and how does it work?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                JSON Web Token (JWT) is an open standard that defines a compact
                and self-contained way for securely transmitting information
                between parties as a JSON object. JWTs or JSON Web Tokens are
                most commonly used to identify an authenticated user. This
                information can be verified and trusted because it is digitally
                signed. JWTs can be signed using a secret (with the HMAC
                algorithm) or a public/private key pair using RSA or ECDSA.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              What is the difference between javascript and NodeJS?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                JavaScript : JavaScript is a high-level programming language
                that makes our web pages and web applications dynamic and
                interactive.
              </p>
              <p>
                NodeJS : Node.js is a runtime environment built on google v8
                engine and typically used to represent a list of objects and
                functions that JavaScript programs can access.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              How does NodeJS handle multiple requests at the same time?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                NodeJS is built with the concept of event-driven architecture.
                It receives multiple client requests and places them into
                EventQueu. NodeJS has its own EventLoop which is an infinite
                loop that receives requests and processes them. EventLoop is the
                listener for the EventQueue. If NodeJS can process the request
                without I/O blocking then the event loop would itself process
                the request and sends the response back to the client by itself.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
};

export default Blog;
