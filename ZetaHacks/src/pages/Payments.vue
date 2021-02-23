<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Enter Phone No. of Payee</h4>
            <div class="active-pink-3 active-pink-4 mb-3">
              <input
                class="form-control"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
            <!-- <p class="category">Created using Roboto Font Family</p> -->
          </md-card-header>
          <md-card-content>
            <div id="typography">
              <div class="tim-typo">
                <h5>Previous Payees</h5>
              </div>
              <div class="row">
                <div class="tim-typo">
                  <h5>
                    <span class="tim-note"> <h5 class="tim">Mark</h5></span>Rs. 257
                  </h5>
                 <button type="button" onclick="">Pay Again</button>
                </div>
                <div class="tim-typo">
                  <h5>
                    <span class="tim-note"><h5 class="tim">Jack</h5></span>Rs. 198
                  </h5><button type="button" onclick="">Pay Again</button>
                </div>
                <!-- <div class="tim-typo">
                  <h3>
                    <span class="tim-note">Header 3</span>The life of Material
                    Dashboard
                  </h3>
                </div>
                <div class="tim-typo">
                  <h4>
                    <span class="tim-note">Header 4</span>The life of Material
                    Dashboard
                  </h4>
                </div>
                <div class="tim-typo">
                  <h5>
                    <span class="tim-note">Header 5</span>The life of Material
                    Dashboard
                  </h5>
                </div>
                <div class="tim-typo">
                  <h6>
                    <span class="tim-note">Header 6</span>The life of Material
                    Dashboard
                  </h6>
                </div>
                <div class="tim-typo">
                  <p>
                    <span class="tim-note">Paragraph</span>
                    I will be the leader of a company that ends up being worth
                    billions of dollars, because I got the answers. I understand
                    culture. I am the nucleus. I think that’s a responsibility
                    that I have, to push possibilities, to show people, this is
                    the level that things could be at.
                  </p>
                </div>
                <div class="tim-typo">
                  <span class="tim-note">Quote</span>
                  <blockquote>
                    <p>
                      I will be the leader of a company that ends up being worth
                      billions of dollars, because I got the answers. I
                      understand culture. I am the nucleus. I think that’s a
                      responsibility that I have, to push possibilities, to show
                      people, this is the level that things could be at.
                    </p>
                    <small> Kanye West, Musician </small>
                  </blockquote>
                </div>
                <div class="tim-typo">
                  <span class="tim-note">Muted Text</span>
                  <p class="text-muted">
                    I will be the leader of a company that ends up being worth
                    billions of dollars, because I got the answers...
                  </p>
                </div>
                <div class="tim-typo">
                  <span class="tim-note">Primary Text</span>
                  <p class="text-primary">
                    I will be the leader of a company that ends up being worth
                    billions of dollars, because I got the answers...
                  </p>
                </div>
                <div class="tim-typo">
                  <span class="tim-note">Info Text</span>
                  <p class="text-info">
                    I will be the leader of a company that ends up being worth
                    billions of dollars, because I got the answers...
                  </p>
                </div>
                <div class="tim-typo">
                  <span class="tim-note">Success Text</span>
                  <p class="text-success">
                    I will be the leader of a company that ends up being worth
                    billions of dollars, because I got the answers...
                  </p>
                </div>
                <div class="tim-typo">
                  <span class="tim-note">Warning Text</span>
                  <p class="text-warning">
                    I will be the leader of a company that ends up being worth
                    billions of dollars, because I got the answers...
                  </p>
                </div>
                <div class="tim-typo">
                  <span class="tim-note">Danger Text</span>
                  <p class="text-danger">
                    I will be the leader of a company that ends up being worth
                    billions of dollars, because I got the answers...
                  </p>
                </div> -->
                <!-- <div class="tim-typo">
                  <h2>
                    <span class="tim-note">Small Tag</span>
                    Header with small subtitle
                    <br />
                    <small>Use "small" tag for the headers</small>
                  </h2>
                </div> -->
              </div>
            </div>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mdbContainer } from "mdbvue";

export default {
  // components: {
  //   mdbContainer,
  // },
  props: {
    dataBackgroundColor: {
      type: String,
      default: "",
    },
  },
};
</script>

<style>
.active-pink-4 input[type="text"]:focus:not([readonly]) {
  border: 1px solid white;
  box-shadow: 0 0 0 1px white;
  background-color: white;
}
.active-pink-3 input[type="text"] {
  border: 1px solid white;
  box-shadow: 0 0 0 1px white;
  background-color: white;
}

.tim{
  color: black;
}
</style>
