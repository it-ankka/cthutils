<script lang="ts">
  export let name: string | undefined = undefined
  let clazz = ""
  export {clazz as class, name as for}
</script>

<label class={`label font-bold ${clazz}`} for={name}>
    <span class="label-text">
      <slot/>
    </span>
</label>
