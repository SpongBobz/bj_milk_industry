<template>
  <div>
    <a-modal
      class="test"
      :destroyOnClose="destroyOnClose"
      @cancel="$emit('cancel',$event)"
      :visible="visible"
      :footer="null"
    >
      <slot></slot>
      <template slot="closeIcon">
        <a-icon type="close-circle" />
      </template>
    </a-modal>
  </div>
</template>
<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    destroyOnClose: {
      type: Boolean,
      default: false
    }
  }
};
</script>
