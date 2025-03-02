<template>
  <div class="login-container">
    <el-card class="login-card">
      <template #header>
        <h2 class="login-title">系统登录</h2>
      </template>
      <el-form :model="loginForm" :rules="rules" ref="loginFormRef">
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            placeholder="请输入用户名"
            prefix-icon="User"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            type="password"
            placeholder="请输入密码"
            prefix-icon="Lock"
            show-password
          />
        </el-form-item>
        <el-form-item prop="captcha">
          <div class="captcha-container">
            <el-input
              v-model="loginForm.captcha"
              placeholder="请输入验证码"
              prefix-icon="Picture"
            />
            <img
              :src="captchaUrl"
              alt="验证码"
              class="captcha-img"
              @click="refreshCaptcha"
            />
          </div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="login-button" @click="handleLogin">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { User, Lock, Picture } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import axios from 'axios'

const router = useRouter()
const loginFormRef = ref(null)
const captchaUrl = ref('')
const captchaId = ref('')

const loginForm = reactive({
  username: '',
  password: '',
  captcha: '',
  captcha_id: ''
})

const rules = {
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
  captcha: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
}

const refreshCaptcha = async () => {
  try {
    const res = await axios.get('/admin/api/v1/auth/captcha')
    captchaUrl.value = res.data.data.captcha_url
    captchaId.value = res.data.data.captcha_id
    loginForm.captcha_id = res.data.data.captcha_id
  } catch (error) {
    ElMessage.error('获取验证码失败')
  }
}

const handleLogin = async () => {
  if (!loginFormRef.value) return
  await loginFormRef.value.validate(async (valid) => {
    if (valid) {
      try {
        const res = await axios.post('/admin/api/v1/auth/login', loginForm)
        localStorage.setItem('token', res.data.token)
        ElMessage.success('登录成功')
        router.push('/')
      } catch (error) {
        ElMessage.error(error.response?.data?.message || '登录失败')
        refreshCaptcha()
      }
    }
  })
}

// 初始化时获取验证码
refreshCaptcha()
</script>

<style scoped>
.login-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3f3f3;
}

.login-card {
  width: 400px;
}

.login-title {
  text-align: center;
  margin: 0;
  color: #303133;
}

.captcha-container {
  display: flex;
  gap: 12px;
}

.captcha-img {
  height: 32px;
  cursor: pointer;
}

.login-button {
  width: 100%;
}
</style>