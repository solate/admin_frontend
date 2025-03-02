<template>
  <div class="dashboard-container">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card class="stat-card">
          <template #header>
            <div class="card-header">
              <el-icon><User /></el-icon>
              <span>用户总数</span>
            </div>
          </template>
          <div class="card-value">2,345</div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="stat-card">
          <template #header>
            <div class="card-header">
              <el-icon><View /></el-icon>
              <span>今日访问</span>
            </div>
          </template>
          <div class="card-value">1,234</div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="stat-card">
          <template #header>
            <div class="card-header">
              <el-icon><Document /></el-icon>
              <span>菜单总数</span>
            </div>
          </template>
          <div class="card-value">56</div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="stat-card">
          <template #header>
            <div class="card-header">
              <el-icon><Setting /></el-icon>
              <span>系统配置</span>
            </div>
          </template>
          <div class="card-value">23</div>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="20" class="chart-row">
      <el-col :span="12">
        <el-card class="chart-card">
          <template #header>
            <div class="card-header">
              <span>访问统计</span>
            </div>
          </template>
          <div class="chart-placeholder">
            访问统计图表
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="chart-card">
          <template #header>
            <div class="card-header">
              <span>系统状态</span>
            </div>
          </template>
          <div class="chart-placeholder">
            系统状态图表
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { User, View, Document, Setting } from '@element-plus/icons-vue'
</script>

<style scoped>
.dashboard-container {
  padding: 20px;
}

.stat-card {
  margin-bottom: 20px;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 8px;
}

.card-value {
  font-size: 24px;
  font-weight: bold;
  color: #409eff;
  text-align: center;
  margin-top: 10px;
}

.chart-row {
  margin-top: 20px;
}

.chart-card {
  height: 350px;
}

.chart-placeholder {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #909399;
  font-size: 14px;
}
</style>