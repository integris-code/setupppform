<template>
  <b-card :header="header" header-tag="h2" header-class="h5">
    <b-form-row>
      <b-col cols="12" md="6" lg="3">
        <FormField :name="prefixed.salutation" v-bind="commonBind"></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField :name="prefixed.firstName" v-bind="commonBind"></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField :name="prefixed.otherNames" v-bind="commonBind"></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField :name="prefixed.lastName" v-bind="commonBind"></FormField>
      </b-col>
    </b-form-row>

    <b-form-row>
      <b-col cols="12" md="6" lg="3">
        <FormField :name="prefixed.dateOfBirth" v-bind="commonBind"></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField :name="prefixed.gender" v-bind="commonBind"></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.socialInsurranceNumber"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.maritalStatus"
          v-bind="commonBind"
        ></FormField>
      </b-col>
    </b-form-row>

    <b-form-row>
      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.firstYearPppProvisionType"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.expectedYearOfRetirement"
          v-bind="commonBind"
        ></FormField>
      </b-col>
    </b-form-row>

    <b-form-row>
      <b-col cols="12" lg="6">
        <FormField
          :name="prefixed.primaryEmailAddress"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.primaryPhoneNumber"
          v-bind="commonBind"
        ></FormField>
      </b-col>
    </b-form-row>

    <b-form-row>
      <b-col cols="12" lg="6">
        <FormField
          :name="prefixed.alternateEmailAddress"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.alternatePhoneNumber"
          v-bind="commonBind"
        ></FormField>
      </b-col>
    </b-form-row>

    <b-form-row>
      <b-col cols="12">
        <FormField :name="prefixed.street1" v-bind="commonBind"></FormField>
      </b-col>
    </b-form-row>

    <b-form-row>
      <b-col cols="12" lg="6">
        <FormField :name="prefixed.street2" v-bind="commonBind"></FormField>
      </b-col>

      <b-col cols="12" lg="6">
        <FormField :name="prefixed.street3" v-bind="commonBind"></FormField>
      </b-col>
    </b-form-row>

    <b-form-row>
      <b-col cols="12" md="6" lg="3">
        <FormField :name="prefixed.city" v-bind="commonBind"></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField :name="prefixed.province" v-bind="commonBind"></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField :name="prefixed.country" v-bind="commonBind"></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField :name="prefixed.postalCode" v-bind="commonBind"></FormField>
      </b-col>
    </b-form-row>

    <hr />
    <h3 class="h5">Buy Back of Past Service</h3>

    <b-form-row>
      <b-col cols="12" lg="6">
        <FormField
          :name="prefixed.buyingBackPastService"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" lg="6">
        <FormField
          :name="prefixed.buyingBackPastService_yearsRecognized"
          v-bind="commonBind"
        ></FormField>
      </b-col>
    </b-form-row>

    <hr />
    <h3 class="h5">Spouse</h3>

    <b-form-row>
      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.spouse_salutation"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.spouse_firstName"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.spouse_otherNames"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.spouse_lastName"
          v-bind="commonBind"
        ></FormField>
      </b-col>
    </b-form-row>

    <b-form-row>
      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.spouse_dateOfBirth"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.spouse_gender"
          v-bind="commonBind"
        ></FormField>
      </b-col>
    </b-form-row>

    <hr />
    <h3 class="h5">Beneficiary Designation</h3>

<div v-show="show.ben1">
    <h4 class="h6">Beneficiary Designation #1</h4>

    <b-form-row>
      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.beneficiaryDesignation1_firstName"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.beneficiaryDesignation1_lastName"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.beneficiaryDesignation1_dateOfBirth"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.beneficiaryDesignation1_relationship"
          v-bind="commonBind"
        ></FormField>
      </b-col>
    </b-form-row>

    <b-form-row>
      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.beneficiaryDesignation1_type"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.beneficiaryDesignation1_share"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.beneficiaryDesignation1_revocability"
          v-bind="commonBind"
        ></FormField>
      </b-col>
    </b-form-row>
    <b-button variant="secondary" class="mb-5" @click="show.ben2=true">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-dotted" viewBox="0 0 16 16">
  <path d="M8 0c-.176 0-.35.006-.523.017l.064.998a7.117 7.117 0 0 1 .918 0l.064-.998A8.113 8.113 0 0 0 8 0zM6.44.152c-.346.069-.684.16-1.012.27l.321.948c.287-.098.582-.177.884-.237L6.44.153zm4.132.271a7.946 7.946 0 0 0-1.011-.27l-.194.98c.302.06.597.14.884.237l.321-.947zm1.873.925a8 8 0 0 0-.906-.524l-.443.896c.275.136.54.29.793.459l.556-.831zM4.46.824c-.314.155-.616.33-.905.524l.556.83a7.07 7.07 0 0 1 .793-.458L4.46.824zM2.725 1.985c-.262.23-.51.478-.74.74l.752.66c.202-.23.418-.446.648-.648l-.66-.752zm11.29.74a8.058 8.058 0 0 0-.74-.74l-.66.752c.23.202.447.418.648.648l.752-.66zm1.161 1.735a7.98 7.98 0 0 0-.524-.905l-.83.556c.169.253.322.518.458.793l.896-.443zM1.348 3.555c-.194.289-.37.591-.524.906l.896.443c.136-.275.29-.54.459-.793l-.831-.556zM.423 5.428a7.945 7.945 0 0 0-.27 1.011l.98.194c.06-.302.14-.597.237-.884l-.947-.321zM15.848 6.44a7.943 7.943 0 0 0-.27-1.012l-.948.321c.098.287.177.582.237.884l.98-.194zM.017 7.477a8.113 8.113 0 0 0 0 1.046l.998-.064a7.117 7.117 0 0 1 0-.918l-.998-.064zM16 8a8.1 8.1 0 0 0-.017-.523l-.998.064a7.11 7.11 0 0 1 0 .918l.998.064A8.1 8.1 0 0 0 16 8zM.152 9.56c.069.346.16.684.27 1.012l.948-.321a6.944 6.944 0 0 1-.237-.884l-.98.194zm15.425 1.012c.112-.328.202-.666.27-1.011l-.98-.194c-.06.302-.14.597-.237.884l.947.321zM.824 11.54a8 8 0 0 0 .524.905l.83-.556a6.999 6.999 0 0 1-.458-.793l-.896.443zm13.828.905c.194-.289.37-.591.524-.906l-.896-.443c-.136.275-.29.54-.459.793l.831.556zm-12.667.83c.23.262.478.51.74.74l.66-.752a7.047 7.047 0 0 1-.648-.648l-.752.66zm11.29.74c.262-.23.51-.478.74-.74l-.752-.66c-.201.23-.418.447-.648.648l.66.752zm-1.735 1.161c.314-.155.616-.33.905-.524l-.556-.83a7.07 7.07 0 0 1-.793.458l.443.896zm-7.985-.524c.289.194.591.37.906.524l.443-.896a6.998 6.998 0 0 1-.793-.459l-.556.831zm1.873.925c.328.112.666.202 1.011.27l.194-.98a6.953 6.953 0 0 1-.884-.237l-.321.947zm4.132.271a7.944 7.944 0 0 0 1.012-.27l-.321-.948a6.954 6.954 0 0 1-.884.237l.194.98zm-2.083.135a8.1 8.1 0 0 0 1.046 0l-.064-.998a7.11 7.11 0 0 1-.918 0l-.064.998zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
</svg>
Add another Beneficiary</b-button>
    </div>
<div v-show="show.ben2">
    <h4 class="h6">Beneficiary Designation #2</h4>

    <b-form-row>
      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.beneficiaryDesignation2_firstName"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.beneficiaryDesignation2_lastName"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.beneficiaryDesignation2_dateOfBirth"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.beneficiaryDesignation2_relationship"
          v-bind="commonBind"
        ></FormField>
      </b-col>
    </b-form-row>

    <b-form-row>
      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.beneficiaryDesignation2_type"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.beneficiaryDesignation2_share"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.beneficiaryDesignation2_revocability"
          v-bind="commonBind"
        ></FormField>
      </b-col>
    </b-form-row>
    <b-button variant="secondary" class="mb-5" @click="show.ben3=true">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-dotted" viewBox="0 0 16 16">
  <path d="M8 0c-.176 0-.35.006-.523.017l.064.998a7.117 7.117 0 0 1 .918 0l.064-.998A8.113 8.113 0 0 0 8 0zM6.44.152c-.346.069-.684.16-1.012.27l.321.948c.287-.098.582-.177.884-.237L6.44.153zm4.132.271a7.946 7.946 0 0 0-1.011-.27l-.194.98c.302.06.597.14.884.237l.321-.947zm1.873.925a8 8 0 0 0-.906-.524l-.443.896c.275.136.54.29.793.459l.556-.831zM4.46.824c-.314.155-.616.33-.905.524l.556.83a7.07 7.07 0 0 1 .793-.458L4.46.824zM2.725 1.985c-.262.23-.51.478-.74.74l.752.66c.202-.23.418-.446.648-.648l-.66-.752zm11.29.74a8.058 8.058 0 0 0-.74-.74l-.66.752c.23.202.447.418.648.648l.752-.66zm1.161 1.735a7.98 7.98 0 0 0-.524-.905l-.83.556c.169.253.322.518.458.793l.896-.443zM1.348 3.555c-.194.289-.37.591-.524.906l.896.443c.136-.275.29-.54.459-.793l-.831-.556zM.423 5.428a7.945 7.945 0 0 0-.27 1.011l.98.194c.06-.302.14-.597.237-.884l-.947-.321zM15.848 6.44a7.943 7.943 0 0 0-.27-1.012l-.948.321c.098.287.177.582.237.884l.98-.194zM.017 7.477a8.113 8.113 0 0 0 0 1.046l.998-.064a7.117 7.117 0 0 1 0-.918l-.998-.064zM16 8a8.1 8.1 0 0 0-.017-.523l-.998.064a7.11 7.11 0 0 1 0 .918l.998.064A8.1 8.1 0 0 0 16 8zM.152 9.56c.069.346.16.684.27 1.012l.948-.321a6.944 6.944 0 0 1-.237-.884l-.98.194zm15.425 1.012c.112-.328.202-.666.27-1.011l-.98-.194c-.06.302-.14.597-.237.884l.947.321zM.824 11.54a8 8 0 0 0 .524.905l.83-.556a6.999 6.999 0 0 1-.458-.793l-.896.443zm13.828.905c.194-.289.37-.591.524-.906l-.896-.443c-.136.275-.29.54-.459.793l.831.556zm-12.667.83c.23.262.478.51.74.74l.66-.752a7.047 7.047 0 0 1-.648-.648l-.752.66zm11.29.74c.262-.23.51-.478.74-.74l-.752-.66c-.201.23-.418.447-.648.648l.66.752zm-1.735 1.161c.314-.155.616-.33.905-.524l-.556-.83a7.07 7.07 0 0 1-.793.458l.443.896zm-7.985-.524c.289.194.591.37.906.524l.443-.896a6.998 6.998 0 0 1-.793-.459l-.556.831zm1.873.925c.328.112.666.202 1.011.27l.194-.98a6.953 6.953 0 0 1-.884-.237l-.321.947zm4.132.271a7.944 7.944 0 0 0 1.012-.27l-.321-.948a6.954 6.954 0 0 1-.884.237l.194.98zm-2.083.135a8.1 8.1 0 0 0 1.046 0l-.064-.998a7.11 7.11 0 0 1-.918 0l-.064.998zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
</svg>Add another Beneficiary</b-button>
</div>
<div v-show="show.ben3">
    <h4 class="h6">Beneficiary Designation #3</h4>

    <b-form-row>
      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.beneficiaryDesignation3_firstName"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.beneficiaryDesignation3_lastName"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.beneficiaryDesignation3_dateOfBirth"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.beneficiaryDesignation3_relationship"
          v-bind="commonBind"
        ></FormField>
      </b-col>
    </b-form-row>

    <b-form-row>
      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.beneficiaryDesignation3_type"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.beneficiaryDesignation3_share"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.beneficiaryDesignation3_revocability"
          v-bind="commonBind"
        ></FormField>
      </b-col>
        
 </b-form-row>
  <b-button variant="secondary" class="mb-5" @click="show.ben4=true">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-dotted" viewBox="0 0 16 16">
  <path d="M8 0c-.176 0-.35.006-.523.017l.064.998a7.117 7.117 0 0 1 .918 0l.064-.998A8.113 8.113 0 0 0 8 0zM6.44.152c-.346.069-.684.16-1.012.27l.321.948c.287-.098.582-.177.884-.237L6.44.153zm4.132.271a7.946 7.946 0 0 0-1.011-.27l-.194.98c.302.06.597.14.884.237l.321-.947zm1.873.925a8 8 0 0 0-.906-.524l-.443.896c.275.136.54.29.793.459l.556-.831zM4.46.824c-.314.155-.616.33-.905.524l.556.83a7.07 7.07 0 0 1 .793-.458L4.46.824zM2.725 1.985c-.262.23-.51.478-.74.74l.752.66c.202-.23.418-.446.648-.648l-.66-.752zm11.29.74a8.058 8.058 0 0 0-.74-.74l-.66.752c.23.202.447.418.648.648l.752-.66zm1.161 1.735a7.98 7.98 0 0 0-.524-.905l-.83.556c.169.253.322.518.458.793l.896-.443zM1.348 3.555c-.194.289-.37.591-.524.906l.896.443c.136-.275.29-.54.459-.793l-.831-.556zM.423 5.428a7.945 7.945 0 0 0-.27 1.011l.98.194c.06-.302.14-.597.237-.884l-.947-.321zM15.848 6.44a7.943 7.943 0 0 0-.27-1.012l-.948.321c.098.287.177.582.237.884l.98-.194zM.017 7.477a8.113 8.113 0 0 0 0 1.046l.998-.064a7.117 7.117 0 0 1 0-.918l-.998-.064zM16 8a8.1 8.1 0 0 0-.017-.523l-.998.064a7.11 7.11 0 0 1 0 .918l.998.064A8.1 8.1 0 0 0 16 8zM.152 9.56c.069.346.16.684.27 1.012l.948-.321a6.944 6.944 0 0 1-.237-.884l-.98.194zm15.425 1.012c.112-.328.202-.666.27-1.011l-.98-.194c-.06.302-.14.597-.237.884l.947.321zM.824 11.54a8 8 0 0 0 .524.905l.83-.556a6.999 6.999 0 0 1-.458-.793l-.896.443zm13.828.905c.194-.289.37-.591.524-.906l-.896-.443c-.136.275-.29.54-.459.793l.831.556zm-12.667.83c.23.262.478.51.74.74l.66-.752a7.047 7.047 0 0 1-.648-.648l-.752.66zm11.29.74c.262-.23.51-.478.74-.74l-.752-.66c-.201.23-.418.447-.648.648l.66.752zm-1.735 1.161c.314-.155.616-.33.905-.524l-.556-.83a7.07 7.07 0 0 1-.793.458l.443.896zm-7.985-.524c.289.194.591.37.906.524l.443-.896a6.998 6.998 0 0 1-.793-.459l-.556.831zm1.873.925c.328.112.666.202 1.011.27l.194-.98a6.953 6.953 0 0 1-.884-.237l-.321.947zm4.132.271a7.944 7.944 0 0 0 1.012-.27l-.321-.948a6.954 6.954 0 0 1-.884.237l.194.98zm-2.083.135a8.1 8.1 0 0 0 1.046 0l-.064-.998a7.11 7.11 0 0 1-.918 0l-.064.998zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
</svg>Add another Beneficiary</b-button>
</div><div v-show="show.ben4">
    <h4 class="h6">Beneficiary Designation #4</h4>

    <b-form-row>
      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.beneficiaryDesignation4_firstName"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.beneficiaryDesignation4_lastName"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.beneficiaryDesignation4_dateOfBirth"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.beneficiaryDesignation4_relationship"
          v-bind="commonBind"
        ></FormField>
      </b-col>
    </b-form-row>

    <b-form-row>
      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.beneficiaryDesignation4_type"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.beneficiaryDesignation4_share"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.beneficiaryDesignation4_revocability"
          v-bind="commonBind"
        ></FormField>
      </b-col>
      </b-form-row>
     <b-button variant="secondary" class="mb-5" @click="show.ben5=true">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-dotted" viewBox="0 0 16 16">
  <path d="M8 0c-.176 0-.35.006-.523.017l.064.998a7.117 7.117 0 0 1 .918 0l.064-.998A8.113 8.113 0 0 0 8 0zM6.44.152c-.346.069-.684.16-1.012.27l.321.948c.287-.098.582-.177.884-.237L6.44.153zm4.132.271a7.946 7.946 0 0 0-1.011-.27l-.194.98c.302.06.597.14.884.237l.321-.947zm1.873.925a8 8 0 0 0-.906-.524l-.443.896c.275.136.54.29.793.459l.556-.831zM4.46.824c-.314.155-.616.33-.905.524l.556.83a7.07 7.07 0 0 1 .793-.458L4.46.824zM2.725 1.985c-.262.23-.51.478-.74.74l.752.66c.202-.23.418-.446.648-.648l-.66-.752zm11.29.74a8.058 8.058 0 0 0-.74-.74l-.66.752c.23.202.447.418.648.648l.752-.66zm1.161 1.735a7.98 7.98 0 0 0-.524-.905l-.83.556c.169.253.322.518.458.793l.896-.443zM1.348 3.555c-.194.289-.37.591-.524.906l.896.443c.136-.275.29-.54.459-.793l-.831-.556zM.423 5.428a7.945 7.945 0 0 0-.27 1.011l.98.194c.06-.302.14-.597.237-.884l-.947-.321zM15.848 6.44a7.943 7.943 0 0 0-.27-1.012l-.948.321c.098.287.177.582.237.884l.98-.194zM.017 7.477a8.113 8.113 0 0 0 0 1.046l.998-.064a7.117 7.117 0 0 1 0-.918l-.998-.064zM16 8a8.1 8.1 0 0 0-.017-.523l-.998.064a7.11 7.11 0 0 1 0 .918l.998.064A8.1 8.1 0 0 0 16 8zM.152 9.56c.069.346.16.684.27 1.012l.948-.321a6.944 6.944 0 0 1-.237-.884l-.98.194zm15.425 1.012c.112-.328.202-.666.27-1.011l-.98-.194c-.06.302-.14.597-.237.884l.947.321zM.824 11.54a8 8 0 0 0 .524.905l.83-.556a6.999 6.999 0 0 1-.458-.793l-.896.443zm13.828.905c.194-.289.37-.591.524-.906l-.896-.443c-.136.275-.29.54-.459.793l.831.556zm-12.667.83c.23.262.478.51.74.74l.66-.752a7.047 7.047 0 0 1-.648-.648l-.752.66zm11.29.74c.262-.23.51-.478.74-.74l-.752-.66c-.201.23-.418.447-.648.648l.66.752zm-1.735 1.161c.314-.155.616-.33.905-.524l-.556-.83a7.07 7.07 0 0 1-.793.458l.443.896zm-7.985-.524c.289.194.591.37.906.524l.443-.896a6.998 6.998 0 0 1-.793-.459l-.556.831zm1.873.925c.328.112.666.202 1.011.27l.194-.98a6.953 6.953 0 0 1-.884-.237l-.321.947zm4.132.271a7.944 7.944 0 0 0 1.012-.27l-.321-.948a6.954 6.954 0 0 1-.884.237l.194.98zm-2.083.135a8.1 8.1 0 0 0 1.046 0l-.064-.998a7.11 7.11 0 0 1-.918 0l-.064.998zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
</svg>Add another Beneficiary</b-button>
</div><div v-show="show.ben5">
    <h4 class="h6">Beneficiary Designation #5</h4>

    <b-form-row>
      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.beneficiaryDesignation5_firstName"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.beneficiaryDesignation5_lastName"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.beneficiaryDesignation5_dateOfBirth"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.beneficiaryDesignation5_relationship"
          v-bind="commonBind"
        ></FormField>
      </b-col>
    </b-form-row>

    <b-form-row>
      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.beneficiaryDesignation5_type"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.beneficiaryDesignation5_share"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.beneficiaryDesignation5_revocability"
          v-bind="commonBind"
        ></FormField>
      </b-col>
    </b-form-row>
</div>
    <b-card class="bg-light mt-5">
      <b-form-row >
        <b-col cols="12" md="6" lg="3">
          <FormField
            :name="prefixed.beneficiaryDesignation_totalShare"
            v-bind="commonBind"
          ></FormField>
        </b-col>
      </b-form-row>
    </b-card>
  </b-card>
</template>

<script>
export default {
  props: {
    language: {
      type: String,
      default() {
        return this.$localize_defaultlanguage
      },
    },
    validated: {
      type: Boolean,
      default: false,
    },
    values: {
      type: Object,
      default() {
        return {}
      },
    },
    header: {
      type: String,
      default: 'Untitled',
    },
    prefix: {
      type: String,
      default: '',
    },
  },
  data() {
    const prefixer = this.$prefixer(this.prefix)
    return {
      show: {
        ben1: true,
        ben2: false,
        ben3: false,
        ben4: false,
        ben5: false
      },
      fields: {
        [prefixer.set('salutation')]: {
          label: 'Salutation',
          type: 'select',
          choices: [
            { text: 'Select\u2026', value: '' },
            'Mr',
            'Ms',
            'Dr',
            'Mrs',
          ],
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('firstName')]: {
          label: 'First Name',
          type: 'text',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('otherNames')]: {
          label: 'Other Name(s)',
          type: 'text',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('lastName')]: {
          label: 'Last Name',
          type: 'text',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('dateOfBirth')]: {
          label: 'Date of Birth',
          type: 'datepicker',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('gender')]: {
          label: 'Gender',
          type: 'select',
          choices: [{ text: 'Select\u2026', value: '' }, 'Male', 'Female'],
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('socialInsurranceNumber')]: {
          label: 'Social Insurrance Number',
          type: 'text',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('maritalStatus')]: {
          label: 'Marital Status',
          type: 'select',
          choices: [
            { text: 'Select\u2026', value: '' },
            'Single',
            'Married',
            'Common-Law/Civily United',
            'Separated',
            'Divorced',
            'Widowed',
          ],
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('firstYearPppProvisionType')]: {
          label: 'First Year PPP Provision Type',
          type: 'select',
          choices: [
            { text: 'Select\u2026', value: '' },
            'Defined Benefit (DB)',
            'Defined Contribution (DC)',
          ],
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('expectedYearOfRetirement')]: {
          label: 'Expected Year of Retirement',
          type: 'select',
          choices: [{ text: 'Select\u2026', value: '' }],
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('primaryEmailAddress')]: {
          label: 'Primary Email Address',
          type: 'text',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('primaryPhoneNumber')]: {
          label: 'Primary Phone Number',
          type: 'text',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('alternateEmailAddress')]: {
          label: 'Alternate Email Address',
          type: 'text',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('alternatePhoneNumber')]: {
          label: 'Alternate Phone Number',
          type: 'text',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('street1')]: {
          label: 'Street 1',
          type: 'text',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('street2')]: {
          label: 'Street 2',
          type: 'text',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('street3')]: {
          label: 'Street 3',
          type: 'text',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('city')]: {
          label: 'City',
          type: 'text',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('province')]: {
          label: 'Province',
          type: 'select',
          choices: [
            { text: 'Select\u2026', value: '' },
            'Alberta',
            'British Columbia',
            'Manitoba',
            'New Brunswick',
            'Newfoundland & Labrador',
            'Northwest Teritories',
            'Nova Scotia',
            'Nunavut',
            'Ontario',
            'Prince Edward Island',
            'Québec',
            'Saskatchewan',
            'Yukon',
          ],
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('country')]: {
          label: 'Country',
          type: 'select',
          choices: [
            { text: 'Select\u2026', value: '' },
            'Canada',
            'United States',
          ],
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('postalCode')]: {
          label: 'Postal Code',
          type: 'text',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('buyingBackPastService')]: {
          label: 'Check this box if buying back past service',
          type: 'checkbox',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('buyingBackPastService_yearsRecognized')]: {
          label:
            'If checked, indicate the year(s) or range(s) of years to be recognized',
          type: 'text',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('spouse_salutation')]: {
          label: 'Salutation',
          type: 'select',
          choices: [
            { text: 'Select\u2026', value: '' },
            'Mr',
            'Ms',
            'Dr',
            'Mrs',
          ],
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('spouse_firstName')]: {
          label: 'First Name',
          type: 'text',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('spouse_otherNames')]: {
          label: 'Other Name(s)',
          type: 'text',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('spouse_lastName')]: {
          label: 'Last Name',
          type: 'text',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('spouse_dateOfBirth')]: {
          label: 'Date of Birth',
          type: 'datepicker',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('spouse_gender')]: {
          label: 'Gender',
          type: 'select',
          choices: [{ text: 'Select\u2026', value: '' }, 'Male', 'Female'],
          validators: {
            notEmpty: {},
          },
        },

        [prefixer.set('beneficiaryDesignation1_firstName')]: {
          label: 'First Name',
          type: 'text',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('beneficiaryDesignation1_lastName')]: {
          label: 'Last Name',
          type: 'text',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('beneficiaryDesignation1_dateOfBirth')]: {
          label: 'Date of Birth',
          type: 'datepicker',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('beneficiaryDesignation1_relationship')]: {
          label: 'Relationship',
          type: 'text',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('beneficiaryDesignation1_type')]: {
          label: 'Type',
          type: 'select',
          choices: [
            { text: 'Select\u2026', value: '' },
            'Primary',
            'Contingent',
          ],
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('beneficiaryDesignation1_share')]: {
          label: 'Share %',
          type: 'number',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('beneficiaryDesignation1_revocability')]: {
          label: 'Revocability',
          type: 'select',
          choices: [
            { text: 'Select\u2026', value: '' },
            'Revocable',
            'Irrevocable',
          ],
          validators: {
            notEmpty: {},
          },
        },

        [prefixer.set('beneficiaryDesignation2_firstName')]: {
          label: 'First Name',
          type: 'text',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('beneficiaryDesignation2_lastName')]: {
          label: 'Last Name',
          type: 'text',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('beneficiaryDesignation2_dateOfBirth')]: {
          label: 'Date of Birth',
          type: 'datepicker',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('beneficiaryDesignation2_relationship')]: {
          label: 'Relationship',
          type: 'text',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('beneficiaryDesignation2_type')]: {
          label: 'Type',
          type: 'select',
          choices: [
            { text: 'Select\u2026', value: '' },
            'Primary',
            'Contingent',
          ],
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('beneficiaryDesignation2_share')]: {
          label: 'Share %',
          type: 'number',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('beneficiaryDesignation2_revocability')]: {
          label: 'Revocability',
          type: 'select',
          choices: [
            { text: 'Select\u2026', value: '' },
            'Revocable',
            'Irrevocable',
          ],
          validators: {
            notEmpty: {},
          },
        },

        [prefixer.set('beneficiaryDesignation3_firstName')]: {
          label: 'First Name',
          type: 'text',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('beneficiaryDesignation3_lastName')]: {
          label: 'Last Name',
          type: 'text',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('beneficiaryDesignation3_dateOfBirth')]: {
          label: 'Date of Birth',
          type: 'datepicker',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('beneficiaryDesignation3_relationship')]: {
          label: 'Relationship',
          type: 'text',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('beneficiaryDesignation3_type')]: {
          label: 'Type',
          type: 'select',
          choices: [
            { text: 'Select\u2026', value: '' },
            'Primary',
            'Contingent',
          ],
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('beneficiaryDesignation3_share')]: {
          label: 'Share %',
          type: 'number',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('beneficiaryDesignation3_revocability')]: {
          label: 'Revocability',
          type: 'select',
          choices: [
            { text: 'Select\u2026', value: '' },
            'Revocable',
            'Irrevocable',
          ],
          validators: {
            notEmpty: {},
          },
        },

        [prefixer.set('beneficiaryDesignation4_firstName')]: {
          label: 'First Name',
          type: 'text',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('beneficiaryDesignation4_lastName')]: {
          label: 'Last Name',
          type: 'text',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('beneficiaryDesignation4_dateOfBirth')]: {
          label: 'Date of Birth',
          type: 'datepicker',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('beneficiaryDesignation4_relationship')]: {
          label: 'Relationship',
          type: 'text',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('beneficiaryDesignation4_type')]: {
          label: 'Type',
          type: 'select',
          choices: [
            { text: 'Select\u2026', value: '' },
            'Primary',
            'Contingent',
          ],
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('beneficiaryDesignation4_share')]: {
          label: 'Share %',
          type: 'number',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('beneficiaryDesignation4_revocability')]: {
          label: 'Revocability',
          type: 'select',
          choices: [
            { text: 'Select\u2026', value: '' },
            'Revocable',
            'Irrevocable',
          ],
          validators: {
            notEmpty: {},
          },
        },

        [prefixer.set('beneficiaryDesignation5_firstName')]: {
          label: 'First Name',
          type: 'text',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('beneficiaryDesignation5_lastName')]: {
          label: 'Last Name',
          type: 'text',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('beneficiaryDesignation5_dateOfBirth')]: {
          label: 'Date of Birth',
          type: 'datepicker',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('beneficiaryDesignation5_relationship')]: {
          label: 'Relationship',
          type: 'text',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('beneficiaryDesignation5_type')]: {
          label: 'Type',
          type: 'select',
          choices: [
            { text: 'Select\u2026', value: '' },
            'Primary',
            'Contingent',
          ],
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('beneficiaryDesignation5_share')]: {
          label: 'Share %',
          type: 'number',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('beneficiaryDesignation5_revocability')]: {
          label: 'Revocability',
          type: 'select',
          choices: [
            { text: 'Select\u2026', value: '' },
            'Revocable',
            'Irrevocable',
          ],
          validators: {
            notEmpty: {},
          },
        },

        [prefixer.set('beneficiaryDesignation_totalShare')]: {
          label: 'Total Share',
          type: 'number',
          readonly: true,
          defaultValue: 0,
          validators: {
            notEmpty: {},
          },
        },

        [prefixer.set('field')]: {},
      },
      prefixed: prefixer.prefixed,
    }
  },
  computed: {
    commonBind() {
      return {
        language: this.language,
        validated: this.validated,
        values: this.values,
        fields: this.fields,
      }
    },
  },
  methods: {
    getValidations() {
      return Object.keys(this.$refs).reduce((acc, cur) => {
        acc[cur] = this.$refs[cur].validation
        return acc
      }, {})
    },
  },
}
</script>
