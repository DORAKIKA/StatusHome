<script>
import { 
  defineComponent, 
} from 'vue';
import IconLink from '../components/IconLink/IconLink.vue';
import Carousel from '../components/Carousel/Carousel.vue';


export default defineComponent({
  name: 'ProjectGroup',
  props: ['page'],
  components: {IconLink, Carousel},
  setup(){

  },
  
});
</script>

<template>
    <div class="project-group">
      <div class="group-name">{{page.data.name}}</div>
      <div class="projects">
        <carousel :posts="page.data.projects"/>
          <!-- <el-carousel :interval="4000" height="50vh">
            <el-carousel-item  v-for="project,index in page.data.projects" :key="index">
              <div class="project card">
                <div class="cover"><img :src="project.cover" :alt="project.name"></div>
                <div class="info">
                  <div class="name">{{project.name}}</div>
                  <div class="desc">{{project.desc}}</div>
                  <div class="tags">
                    <span v-for="tag in tags" :key="tag.name">{{tag.name}}</span>
                  </div>
                  <div class="links">
                    <icon-link v-for="link in project.links" :key="link.url" :link="link"></icon-link>
                  </div>
                </div>
              </div>
            </el-carousel-item>
          </el-carousel> -->
      </div>

    </div>
</template>

<style scoped>
.project-group{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2em;
}
.group-name{
  font-size: 3em;
  font-weight: bold;
}
.projects{
  width: calc(100% - 8em);
  height: 50vh;
  display: flex;
  justify-content: flex-start;
  transition: 0.3s;
  gap: 1em;
  overflow: hidden;
}
.projects .el-carousel{
  width: 100%;
  height: 100%;
}
.project{
  /* width: calc((100% - 4em) / 5); */
  /* height: fit-content; */
  height: 100%;
  transition: 0.3s;
}
.project .cover img{
  width: 100%;
  height: 30vh;
  object-fit: cover;
  border-radius: 8px;
}

/* @media (max-width: 1500px) {
  .project{
    width: calc((100% - 3em) / 4);
  }
}

@media (max-width: 1080px) {
  .project{
    width: calc((100% - 2em) / 3);
  }
}

@media (max-width: 768px) {
  .project{
    width: calc(100%);
  }
} */
</style>