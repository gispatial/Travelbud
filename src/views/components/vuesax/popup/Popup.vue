<!-- =========================================================================================
    File Name: Popup.vue
    Description: Popup - Imports all page portions
    ----------------------------------------------------------------------------------------
    Item Name: Tripcarte.Asia Dashboard Management Portal
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div id="popup-demo">
        <popup-default></popup-default>
        <popup-background></popup-background>
    </div>
</template>

<script>
import PopupDefault from './PopupDefault.vue'
import PopupBackground from './PopupBackground.vue'

export default{
    components: {
        PopupDefault,
        PopupBackground,
    }
}
</script>
