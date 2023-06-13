<template>
  <div class="flex gap-4 px-4 background">
    <div class="border flex flex-col my-4">
      <h4 class="border-b text-center on-background-text">Brand color scheme</h4>
      <div class="flex flex-col gap-2">
        <div class="flex text-center gap-2">
          <div>
            <h5 class="primary on-primary-text p-2">
              Primary & On Primary Text
            </h5>
            <h5 class="primary-container on-primary-container-text p-2">
              Primary Container & On Primary Container Text
            </h5>
          </div>
          <div>
            <h5 class="secondary on-secondary-text p-2">
              Secondary & On Secondary text
            </h5>
            <h5 class="secondary-container on-secondary-container-text p-2">
              Secondary Container & On Secondary Container Text
            </h5>
          </div>
          <div>
            <h5 class="tertiary on-tertiary-text p-2">
              Tertiary & On Tertiary text
            </h5>
            <h5 class="tertiary-container on-tertiary-container-text p-2">
              Tertiary Container & On Tertiary Container Text
            </h5>
          </div>
        </div>
        <div>
          <h5 class="background on-background-text p-2">Background & On Background text</h5>
        </div>
        <div>
          <h5 class="surface on-surface-text p-2">Surface & On Surface text</h5>
        </div>
        <div>
          <h5 class="surface-container on-surface-text p-2">Surface Container & On Surface text</h5>
        </div>
        <div>
          <h5 class="surface-high on-surface-text p-2">Surface High & On Surface text</h5>
        </div>
        <div>
          <h5 class="surface-variant on-surface-variant-text p-2">
            Surface Variant & On Surface Variant text
          </h5>
        </div>
      </div>
    </div>
    <div class="border flex flex-col my-4">
      <h4 class="border-b text-center on-background-text">Semantic color scheme</h4>
      <div class="flex text-center">
        <div class="flex text-center gap-2">
          <div>
            <h5 class="error on-error-text p-2">Error & On Error Text</h5>
            <h5 class="error-container on-error-container-text p-2">
              Error Container & On Error Container Text
            </h5>
          </div>
          <div>
            <h5 class="succes on-succes-text p-2">Succes & On Succes Text</h5>
            <h5 class="succes-container on-succes-container-text p-2">
              Succes Container & On Succes Container Text
            </h5>
          </div>
          <div>
            <h5 class="warning on-warning-text p-2">
              Warning & On Warning Text
            </h5>
            <h5 class="warning-container on-warning-container-text p-2">
              Warning Container & On Warning Container Text
            </h5>
          </div>
          <div>
            <h5 class="info on-info-text p-2">Info & On Info Text</h5>
            <h5 class="info-container on-info-container-text p-2">
              Info Container & On Info Container Text
            </h5>
          </div>
          <div>
            <h5 class="help on-help-text p-2">Help & On Help Text</h5>
            <h5 class="help-container on-help-container-text p-2">
              Help Container & On Help Container Text
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaletteView",
};
</script>
