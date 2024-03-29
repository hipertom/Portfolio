<script setup>
import TabListItem from '../elements/TabListItem.vue';
import { ref } from 'vue'

const showEducation = ref(false)

function setTab(state) {
  showEducation.value = state == 'my-education'
}

</script>

<template>
  <section class="mytabs_area p_120" id="resume">
    <div class="container">
      <div class="tabs_inner">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item">

            <a
            class="nav-link"
            :class="{'show active': !showEducation}"
            href="#my-experiences"
            role="tab"
            @click.prevent="setTab('my-experiences')"
            aria-selected="true">My Experiences</a>

          </li>
          <li class="nav-item">

            <a
            class="nav-link"
            :class="{'show active': showEducation}"
            href="#my-education"
            role="tab"
            @click.prevent="setTab('my-education')"
            aria-selected="true">My Education</a>

          </li>
        </ul>
        <div class="tab-content">
          <div class="tab-pane fade" :class="{'show active': !showEducation}" id="my-experiences" role="tabpanel">
            <ul class="list">

              <TabListItem
                timePeriod="okt 2021 - heden"
                label="ZIGT"
                title="(lead) Backend developer"
                location="Leiden"
              />

              <TabListItem
                timePeriod="nov 2018 - okt 2021"
                label="Est Digital b.v."
                title="Backend developer"
                location="Leiden"
              />

              <TabListItem
                timePeriod="jan 2018 - nov 2018"
                label="KeesTM Internetbureau"
                title="Backend developer"
                location="Leiden"
              />

            </ul>
          </div>
          <div class="tab-pane fade" :class="{'show active': showEducation}" id="my-education" role="tabpanel">
            <ul class="list">
              <li>
                <span></span>
                <div class="media">
                  <div class="d-flex">
                    <p>March 2017 to present</p>
                  </div>
                  <div class="media-body">
                    <h4>SChool</h4>
                    <p>Senior Web Developer <br />Santa monica, Los angeles</p>
                  </div>
                </div>
              </li>
              <li>
                <span></span>
                <div class="media">
                  <div class="d-flex">
                    <p>March 2017 to present</p>
                  </div>
                  <div class="media-body">
                    <h4>Colorlib</h4>
                    <p>Senior Web Developer <br />Santa monica, Los angeles</p>
                  </div>
                </div>
              </li>
              <li>
                <span></span>
                <div class="media">
                  <div class="d-flex">
                    <p>March 2017 to present</p>
                  </div>
                  <div class="media-body">
                    <h4>Colorlib</h4>
                    <p>Senior Web Developer <br />Santa monica, Los angeles</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
