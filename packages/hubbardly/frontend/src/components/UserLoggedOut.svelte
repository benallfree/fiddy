<script lang="ts">
  import { isUserLoggedIn } from '$src/stores'
  import AuthStateGuard from './AuthStateGuard.svelte'

  export let fallback = false
</script>

<AuthStateGuard {fallback}>
  {#if !$isUserLoggedIn}
    <slot />
  {/if}
</AuthStateGuard>
