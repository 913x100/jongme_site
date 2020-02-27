<template>
  <div class="header">
    <a-row style="margin: 0">
      <a-col :span="8">
        <div class="mini_icon">JM</div>
      </a-col>
      <a-col :span="16" class="right">
        <a-dropdown>
          <a class="ant-dropdown-link" href="#">
            Jongme
            <a-icon type="down" />
          </a>

          <a-menu slot="overlay">
            <a-menu-item>
              <a href="javascript:;">Select page</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">Setting</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">Logout</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
@import "./index.less";
</style>
