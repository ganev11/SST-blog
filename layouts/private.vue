<template>
  <v-card v-click-outside="onClickOutside">
    <v-layout>
      <v-navigation-drawer v-model="drawer" :rail="rail" permanent @click="rail = false">
        <v-list-item nav>
          <div v-show="!rail">
            <v-avatar color="surface-variant">{{ initials }} </v-avatar>
            <span style="margin-left: 10px">{{ user.firstName }} {{ user.lastName }}</span>
          </div>
          <template v-slot:append>
            <v-btn variant="text" icon="mdi-chevron-left" @click.stop="rail = !rail"></v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item
            prepend-icon="mdi mdi-view-dashboard"
            title="Dashboard"
            @click="redirectTo('dashboard')"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-account"
            title="My Account"
            @click="redirectTo('account')"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi mdi-cogs"
            title="Settings"
            @click="redirectTo('settings')"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi mdi-credit-card-outline"
            title="Payments"
            @click="redirectTo('payments')"
          ></v-list-item>
          <v-list-item prepend-icon="mdi mdi-logout" title="Logout" @click="logout"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 250px">
        <div v-if="loading" class="loading"></div>
        <v-progress-circular
          class="center"
          v-if="loading"
          indeterminate
          color="primary"
          model-value="20"
          :size="80"
          :width="8"
        ></v-progress-circular>

        <slot />
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
import localStorage from '~/js/local-storage.js'
import { auth } from '~/js/firebase.js'
import { signOut } from 'firebase/auth'
import { eventBus } from '~/js/eventBus'

export default {
  data() {
    return {
      loading: false,
      drawer: true,
      rail: true,
      user: {
        firstName: '',
        lastName: '',
        email: ''
      },
      initials: ''
    }
  },
  mounted() {
    const storedInfo = localStorage.getItem('userInfo')
    if (storedInfo) {
      this.userInfo = JSON.parse(storedInfo)
      this.setInitials()
    } else {
      // User info not found, redirect to login page
      this.$router.push({ name: 'login' })
    }
    eventBus.on('loading-true', () => {
      this.loading = true
    })
    eventBus.on('loading-false', () => {
      console.log('this.loading :>> ', this.loading)
      this.loading = false
      console.log('this.loading :>> ', this.loading)
    })
  },
  methods: {
    onClickOutside() {
      this.rail = true
    },
    redirectTo(routeName) {
      this.$router.push({ name: routeName })
    },
    setInitials() {
      if (this.userInfo.firstName && this.userInfo.lastName) {
        this.initials = `${this.userInfo.firstName.charAt(0)}${this.userInfo.lastName.charAt(0)}`
      }
    },
    async logout() {
      try {
        await signOut(auth)
        // Redirect to the login page after successful logout
        localStorage.deleteItem('userInfo')
        this.$router.push({ name: 'login' })
      } catch (error) {
        console.error('Logout error:', error.message)
      }
    }
  }
}
</script>

<style scoped>
.displaynone {
  display: none !important;
}
.loading {
  position: fixed;
  min-height: 100%;
  min-width: 100%;
  z-index: 9998;
  background-color: rgba(100, 100, 100, 0.301);
}
.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
}
</style>
