<template>
  <div>
    <section
      id="search"
      class="section section-search teal darken-1 white-text center"
    >
      <div class="container">
        <div class="row">
          <div class="col s12">
            <h3>Search Giphy Images</h3>

            <form>
              <div class="input-field">
                <input
                  class="white grey-text"
                  placeholder="Search gihpy animated gifs here...."
                  v-model="tag"
                  type="text"
                />
              </div>
              <button type="submit" class="go-button" @click.prevent="search">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!--IMAGES-->
    <section id="gallery" class="section section-galley">
      <div class="container">
        <h4 class="teal-text">
          <span class="teal-text">Suggested </span>Results
        </h4>

        <div v-if="!loading" class="row">
          <div class="col s12 m3" v-for="gif in gifs" :key="gif.id">
            <img
              v-bind:src="`${gif.images.preview_gif.url}`"
              alt="giffy"
              class="materialboxed responsive-img"
            />
          </div>
          <div class="load">
            <button v-if="showLoad" v-on:click="search" style="center-align">
              LOAD MORE
            </button>
          </div>
        </div>
        <div v-else>
          <p>Loading.......</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Search",
  data() {
    return {
      loading: false,
      limit: 18,
      tag: "",
      gifs: [],
      showLoad: false,
    };
  },
  methods: {
    loadmore() {
      this.fetchImages().then((response) => {
        this.gifs.push(response.data.data);
        console.log(this.gifs);
        //this.offset += 18;
      });
    },
    search() {
      this.loading = true;

      this.fetchImages().then((response) => {
        this.gifs = response.data.data;
        console.log(response.data);
        this.loading = false;
        this.showLoad = true;
        this.limit += 18;
        //this.offset += 18;
      });
    },
    fetchImages() {
      return axios({
        method: "get",
        url: "http://api.giphy.com/v1/gifs/search",
        params: {
          api_key: "TvHGP2bAbcXxa8Rc2Sfs9mHzweDa4LsG",
          q: this.tag,
          limit: this.limit,
          offset: 0,
        },
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 500px;
  height: 300px;
  margin: 10%;
}
.load {
  width: 100%;
  text-align: center;
}
</style>
