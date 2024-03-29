<script setup>
import SkillElement from '../elements/SkillElement.vue';

</script>

<template>
  <section class="welcome_area p_120" id="about">
    <div class="container">
      <div class="row welcome_inner">
        <div class="col-lg-6">
          <div class="welcome_text">
            <h4>About Myself</h4>
            <p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards
              especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond
              reproach. inappropriate behavior is often laughed.</p>
            <div class="row">
              <div class="col-md-4">
                <div class="wel_item">
                  <i class="lnr lnr-database"></i>
                  <h4>$2.5M</h4>
                  <p>Total Donation</p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="wel_item">
                  <i class="lnr lnr-book"></i>
                  <h4>1465</h4>
                  <p>Total Projects</p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="wel_item">
                  <i class="lnr lnr-users"></i>
                  <h4>3965</h4>
                  <p>Total Volunteers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="tools_expert">
            <div class="skill_main">

              <SkillElement label="PHP" :percentage="85" />
              <SkillElement label="HTML" :percentage="60" />
              <SkillElement label="CSS" :percentage="40" />
              <SkillElement label="Drupal" :percentage="75" />
              <SkillElement label="PHP" :percentage="85" />

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
