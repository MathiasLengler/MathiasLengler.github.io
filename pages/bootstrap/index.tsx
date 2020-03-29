import Head from "next/head";
import React from "react";

const Bootstrap = () => (
  <>
    <Head>
      <meta charSet="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
      <link rel="stylesheet" href="res/bootstrap-darkly/bootstrap.min.css"/>
      <title>Mathias Lengler</title>
    </Head>
    <div className="container">
      <nav className="navbar navbar-default" role="navigation">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"/>
            <span className="icon-bar"/>
            <span className="icon-bar"/>
          </button>
          <a className="navbar-brand" href="index.html">
            Mathias Lengler
          </a>
        </div>

        <div className="collapse navbar-collapse navbar-ex1-collapse">
          <ul className="nav navbar-nav">
            <li><a href="index.html">Projects</a></li>
            <li><a href="https://github.com/MathiasLengler">GitHub</a></li>
          </ul>
        </div>
      </nav>

      <div className="container">
        <div className="page-header">
          <h1>Projects</h1>
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="well thumbnail">
              <img src="res/img/timestable-teaser.png"/>
              <div className="caption">
                <h3 className="text-center">TimesTableWebGL</h3>
                <p className="text-center">
                  <a href="https://github.com/MathiasLengler/TimesTableWebGL" className="btn btn-default"
                     role="button">GitHub</a>
                  <a href="/TimesTableWebGL/" className="btn btn-primary" role="button">Live Demo</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="well thumbnail">
              <img src="res/img/dictcc-teaser.PNG"/>
              <div className="caption">
                <h3 className="text-center">dictcc-rust</h3>
                <p className="text-center">
                  <a href="https://github.com/kedeggel/dictcc-rust" className="btn btn-default"
                     role="button">GitHub</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="well thumbnail">
              <img src="res/img/minesweeper-teaser.png"/>
              <div className="caption">
                <h3 className="text-center">MinesweeperSoEn</h3>
                <p className="text-center">
                  <a href="https://github.com/MathiasLengler/MinesweeperSoEn" className="btn btn-default"
                     role="button">GitHub</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="well thumbnail">
              <img src="res/img/solveservice-teaser.png"/>
              <div className="caption">
                <h3 className="text-center">SolveService</h3>
                <p className="text-center">
                  <a href="https://github.com/MathiasLengler/SolveService" className="btn btn-default"
                     role="button">GitHub</a>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"
            integrity="sha384-3ceskX3iaEnIogmQchP8opvBy3Mi7Ce34nWjpBIwVTHfGYWQS9jwHDVRnpKKHJg7"
            crossOrigin="anonymous"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.3.7/js/tether.min.js"
            integrity="sha384-XTs3FgkjiBgo8qjEjBk0tGmf3wPrWtA6coPfQDfFEY8AnYJwjalXCiosYRBIBZX8"
            crossOrigin="anonymous"/>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.5/js/bootstrap.min.js"
            integrity="sha384-BLiI7JTZm+JWlgKa0M0kGRpJbF2J8q+qreVrKBC47e3K6BW78kGLrCkeRX6I9RoK"
            crossOrigin="anonymous"/>
  </>
);

export default Bootstrap
