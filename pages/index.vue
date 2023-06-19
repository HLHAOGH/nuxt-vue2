<template>
  <div>
    <el-button type="primary" @click="count++">点击{{ count }}</el-button>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data: () => ({
    count: 0
  })
}
</script>
