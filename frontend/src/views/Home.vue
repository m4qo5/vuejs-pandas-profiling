<template>
  <div>
    <MainPageSlider />
    <MainPageAboutBlock />
  </div>
</template>

<script>
import MainPageSlider from "../components/MainPageSlider";
import MainPageAboutBlock from "../components/MainPageAboutBlock";

export default {
  name: "Home",
  components: {
    MainPageSlider,
    MainPageAboutBlock
  }
};
</script>
