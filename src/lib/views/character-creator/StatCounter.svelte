<!-- svelte-ignore a11y-label-has-associated-control -->
<script lang="ts">
  export let value: number | null = null;
  const round = (val: number) => (val > 1 ? Math.floor(val) : 1);
  let clazz = '';
  export { clazz as class };
  $: {
	console.log(value)
    value = parseInt(value?.toString().replace(/D/g, '') || "")
	if(!value) value = null
	if (value && value < 1) {
      value = 1;
    }
  }
</script>

<div class={'form-control ' + clazz}>
  <label class="input-group input-group-xs grid w-24 grid-cols-3">
    <input min={1} bind:value class="input px-1 input-bordered input-xs appearance-none" />
    <span class="text-center px-1 overflow-hidden">{value !== null ? round(value / 2) : ''}</span>
    <span class="text-center px-1 overflow-hidden">{value !== null ? round(value / 5) : ''}</span>
  </label>
</div>

<style>
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
</style>
