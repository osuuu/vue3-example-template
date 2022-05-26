<template>
  <div class="pages">
    登录

  </div>
</template>

<script setup>
  import {
    ref
  } from 'vue';
  
  import {
    login
  } from "@/api"
  const INITIAL_DATA = {
    account: '',
    password: '',
  };

  const rules = {
    account: [{
      required: true,
      message: '账号不能为空',
      type: 'warning'
    }],
    password: [{
      required: true,
      message: '密码不能为空',
      type: 'warning'
    }],
  };

  const formData = ref({
    ...INITIAL_DATA
  });

  const onReset = () => {
    MessagePlugin.success('重置成功');
  };

  const onSubmit = ({
    validateResult,
    firstError
  }) => {

    if (validateResult === true) {
      // MessagePlugin.success('提交成功');
      login({
        phone:formData.value.account,
        password:formData.value.password
      }).then(res => {

      })
    } else {
      console.log('Validate Errors: ', firstError, validateResult);
      MessagePlugin.warning(firstError);
    }
  };
</script>

<style scoped lang="less">
  .pages {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    z-index: 9;
    background: #fff no-repeat 50% url('https://assets.codehub.cn/micro-frontend/login/f7eeecbeccefe963298c23b54741d473.png');
    background-size: 2560px 1490px;

    .pages-wrap {
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 384px;
      padding: 30px 20px;
      overflow: hidden;
      border: 1.5px solid #fff;
      border-radius: 10px;
      background: #fff;
      // box-shadow: 0 0 8px 0 rgba(0,0,0,0.20);



      .pages-wrap-title {
        text-align: center;

        .pages-wrap-head-logo {
          width: 160px;
          height: 60px;
          display: inline-block;
          background: url('../../assets/images/head.png') no-repeat;
          background-size: 100% 100%;
        }
      }


      .pages-wrap-body {
        margin-top: 20px;
      }
    }
  }

  @media screen and (min-width: 768px) {}

  @media screen and (max-width: 768px) {
    .pages-wrap {
      width: 95% !important;
    }

    .pages-wrap-main {
      width: auto !important;
    }

  }
</style>