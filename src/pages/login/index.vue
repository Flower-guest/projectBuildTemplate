<template>
  <div class="dark">
    <div class="absolute left-0 top-0 z-10 flex flex-1">
      <div class="ml-20 mt-20 flex flex-1 items-center">
        <img :src="getAssets('home.png')" class="mr-10" width="42" />
        <p class="fs-32 m-0 fc-#f2f2f2">LOGO</p>
      </div>
    </div>
    <div class="flex-center relative w-full h-full flex items-center justify-center">
      <div class="login-background"></div>
      <div
        class="login-box rounded-3xl z-10 px-50 py-38 pb-20 box-border md:w-[36%] lg:w-[30%] xl:w-[30%] bg-#14161a fc-#f2f2f2 shadow-[0_4px_80px_0_hsl(212,100%,45%/.15)] border-[1px] border-[rgba(255,255,255,0.1)]">
        <div class="mt-6  box-border">
          <!-- 标题 -->
          <div class=" mb-4">
            <h2 class="fs-34 font-bold">欢迎回来 👋</h2>
          </div>

          <!-- 表单 -->
          <el-form :model="loginForm" :rules="rules" ref="loginFormRef" label-position="top" class="text-gray-200">
            <!-- 账户 -->
            <el-form-item prop="account">
              <el-input v-model="loginForm.account" placeholder="请输入用户名" />
            </el-form-item>

            <!-- 密码 -->
            <el-form-item prop="password">
              <el-input show-password v-model="loginForm.password" placeholder="请输入密码" type="password" />
            </el-form-item>

            <!-- 记住账户 -->
            <el-form-item>
              <div class="flex justify-between items-center w-full">
                <el-checkbox v-model="loginForm.remember">记住账户</el-checkbox>
                <el-button type="primary" link class="fs-14">忘记密码？</el-button>
              </div>
            </el-form-item>

            <!-- 提交按钮 -->
            <el-form-item>
              <el-button color="#006be6" type="primary" class="w-full" @click="handleSubmit" :loading="isSubmitting">
                登录
              </el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getAssets } from '@/utils';
import { ElMessage, FormInstance, FormRules } from 'element-plus';

// 登录表单数据类型
interface LoginForm {
  username: string;
  account: string;
  password: string;
  remember: boolean;
}

// 初始化表单数据
const loginForm = reactive<LoginForm>({
  username: '',
  account: '',
  password: '',
  remember: false,
});

// 表单验证规则
const rules: FormRules = {
  username: [{ required: true, message: '请选择用户名', trigger: 'change' }],
  account: [{ required: true, message: '请输入账户', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
};

// 表单引用类型
const loginFormRef = ref<FormInstance>();

// 提交按钮状态
const isSubmitting = ref<boolean>(false);

// 表单提交处理函数
const handleSubmit = async () => {
  if (!loginFormRef.value) return;
  loginFormRef.value.validate((valid: boolean) => {
    if (valid) {
      isSubmitting.value = true;
      // 模拟登录请求
      setTimeout(() => {
        ElMessage.success('登录成功');
        isSubmitting.value = false;
      }, 1500);
    } else {
      ElMessage.error('请完善表单信息');
    }
  });
};
</script>

<style lang="less" scoped>
.dark {
  height: 100vh;
  overscroll-behavior: none;
  width: 100vw;
  background-color: #1c1e23;
  position: relative;

  .login-background {
    @apply absolute left-0 top-0 w-full h-full;
    background: linear-gradient(154deg, #07070915 30%, hsl(212 100% 45% / 20%) 48%, #07070915 64%);
    filter: blur(100px);
  }

  .login-box {
    box-shadow: 0 6px 16px 0 hsl(212 100% 45% /.05), 0 3px 6px -4px hsl(212 100% 45% /.05), 0 9px 28px 8px hsl(212 100% 45% /.05);
  }
}

:deep(.el-form) {
  .el-input {
    height: 40px;
  }

  .el-input__inner {
    color: #f2f2f2;
    font-size: 14px;
  }

  .el-input__wrapper {
    background-color: #1c1d22;
    color: #f2f2f2;
    box-shadow: none;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .el-select .el-input__wrapper {
    background-color: #1c1d22;
    color: #f2f2f2;
  }

  .el-button {
    border-radius: 4px;
    height: 40px;
    font-size: 14px;
  }

  .el-checkbox__inner {
    background-color: #14161a;
    border-color: hsl(240, 3.7%, 22%);
  }

  .el-checkbox__label {
    color: #f2f2f2;
  }
}
</style>
