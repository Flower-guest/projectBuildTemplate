<script setup lang="ts">
import { Back, RefreshRight } from '@element-plus/icons-vue'

interface FallbackProps {
  /**
   *  @zh_CN 首页路由地址
   *  @default /
   */
  homePath?: string;
  /**
   *  @zh_CN 内置类型
   */
  status?: '403' | '404' | '500' | 'offline';
  /**
   *  @zh_CN 页面提示语
   */
  title?: string;
}

const props = withDefaults(defineProps<FallbackProps>(), {
  homePath: '/',
  showBack: true,
  status: '404',
  title: '',
});

const Icon403 = defineAsyncComponent(() => import('./icons/icon-403.vue'));
const Icon404 = defineAsyncComponent(() => import('./icons/icon-404.vue'));
const Icon500 = defineAsyncComponent(() => import('./icons/icon-500.vue'));

const IconOffline = defineAsyncComponent(
  () => import('./icons/icon-offline.vue'),
);

const titleText = computed(() => {
  if (props.title) {
    return props.title;
  }

  switch (props.status) {
    case '403': {
      return '哎呀！访问被拒绝';
    }

    case '404': {
      return '哎呀！未找到页面';
    }

    case '500': {
      return '哎呀！出错了';
    }

    case 'offline': {
      return '哎呀！网络错误';
    }

    default: {
      return '';
    }
  }
});

const descText = computed(() => {
  switch (props.status) {
    case '403': {
      return '抱歉，您没有权限访问该页面';
    }

    case '404': {
      return '抱歉，您访问的页面不存在';
    }

    case '500': {
      return '抱歉，服务器遇到错误';
    }

    case 'offline': {
      return '抱歉，无法连接到互联网，请检查您的网络连接并重试';
    }

    default: {
      return '';
    }
  }
});

const fallbackIcon = computed(() => {
  switch (props.status) {
    case '403': {
      return Icon403;
    }

    case '404': {
      return Icon404;
    }

    case '500': {
      return Icon500;
    }

    case 'offline': {
      return IconOffline;
    }

    default: {
      return null;
    }
  }
});

const showBack = computed(() => {
  return props.status === '403' || props.status === '404';
});

const showRefresh = computed(() => {
  return props.status === '500' || props.status === 'offline';
});

const { push } = useRouter();

// 返回首页
function back() {
  push(props.homePath);
}

function refresh() {
  location.reload();
}
</script>

<template>
  <div class="flex size-full flex-col items-center justify-center duration-300">
    <component :is="fallbackIcon" v-if="fallbackIcon" class="md:1/3 h-1/3 w-1/2 lg:w-1/4" />
    <div class="flex flex-col items-center">
      <slot v-if="$slots.title" name="title"></slot>
      <p v-else-if="titleText" class="mt-8 fs-36">
        {{ titleText }}
      </p>
      <slot v-if="$slots.describe" name="describe"></slot>
      <p v-else-if="descText" class="fs-28 my-8">
        {{ descText }}
      </p>
      <slot v-if="$slots.action" name="action"></slot>
      <el-button v-else-if="showBack" size="large" @click="back" type="primary" :icon="Back">
        返回首页
      </el-button>
      <el-button v-else-if="showRefresh" size="large" @click="refresh" type="primary" :icon="RefreshRight">
        刷新
      </el-button>
    </div>
  </div>
</template>
