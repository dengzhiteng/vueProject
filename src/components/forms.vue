<template>
  <div class="form">
    <el-form
      :disabled="isDisabled"
      :model="form"
      ref="form"
      :rules="rules"
      :inline="formType"
      :label-width="labelWidth"
      label-position="right"
      size="small"
      :style="{ width: formWidth }"
    >
      <div
        :class="formType ? 'disInline' : 'disBlock'"
        v-for="(item, index) in formItemList"
        :key="index"
      >
        <el-form-item :label="item.label" :prop="item.prop" v-if="!item.slot">
          <el-input
            :class="[item.append ? 'appendInput' : '']"
            v-if="item.type == 'input' && !item.isContent"
            v-model.trim="form[item.prop]"
            :type="item.inputType ? item.inputType : 'text'"
            :disabled="item.disabled"
            :clearable="true"
            :placeholder="`${'请输入' + item.label}`"
            :maxlength="item.maxlength"
            :show-word-limit="item.maxlength != 0 && !item.isHideLimit"
          >
            <template v-if="item.prepend" slot="prepend">{{
              item.prepend
            }}</template>
            <template v-if="item.append" slot="append">{{
              item.append
            }}</template>
          </el-input>

          <el-radio-group
            v-model.trim="form[item.prop]"
            v-if="item.type == 'radio'"
            @change="changeRadio"
          >
            <el-radio
              v-for="(item, index) in item.radioList"
              :key="index"
              :label="item.value"
              >{{ item.label }}</el-radio
            >
          </el-radio-group>

          <!-- 文本框 -->
          <el-input
            style="display: block"
            v-if="item.type == 'textarea' && !item.isContent"
            :disabled="item.disabled"
            :clearable="true"
            type="textarea"
            :rows="4"
            :maxlength="item.maxlength"
            :cols="item.cols ? item.cols : 30"
            v-model.trim="form[item.prop]"
            :show-word-limit="item.maxlength != '' ? true : false"
            :placeholder="`${'请输入' + item.label}`"
          ></el-input>
          <!-- 下拉选择框 filterable: 控制是否能搜索-->
          <el-select
            :clearable="true"
            v-if="item.type == 'select' && !item.isContent"
            v-model="form[item.prop]"
            :disabled="item.disabled"
            :placeholder="`${'请选择' + item.label}`"
            :filterable="item.filterable"
            :multiple="item.multiple"
            :remote="item.remote"
            @change="handleSelect(item.label, form[item.prop], item.prop)"
            @focus="handleSelectBlur(item.prop)"
            @clear="handleSelectClear(item.prop)"
          >
            <el-option
              v-for="(optItem, index) in item.optList"
              :key="index"
              :label="optItem.label"
              :value="optItem.value"
              :collapse-tags="item.isTags"
            ></el-option>
          </el-select>
          <!-- type: 时间选择器类型 -->
          <el-date-picker
            v-if="
              !item.slot &&
                item.type.substring(0, 4) == 'date' &&
                !item.isContent
            "
            v-model="form[item.prop]"
            :type="item.type"
            placeholder="选择日期时间"
            :disabled="item.disabled"
            :minTime="item.minTime"
            :maxTime="item.maxTime"
            :picker-options="item.pickerOptions"
            :default-time="['00:00:00']"
            value-format="timestamp"
            range-separator="至"
            :start-placeholder="item.startPlaceholder || '开始时间'"
            :end-placeholder="item.endPlaceholder || '结束时间'"
            :unlink-panels="true"
          ></el-date-picker>
        </el-form-item>
        <slot v-else :name="item.slot"></slot>
        <br v-if="item.isBreak" />
      </div>
      <slot name="formItem"></slot>
      <el-form-item v-if="isShowBtn" class="form_btn">
        <el-button type="primary" @click="onSubmit()" size="small">{{
          btnInfo.sure
        }}</el-button>
        <el-button @click="resetForm('form')" size="small">{{
          btnInfo.cancel
        }}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
/**
 * common
 * isBreak: 是否换行
 * isContent: {
 *     type: Boolean
 *     是否隐藏相应表单元素，只显示内容
 * }
 *
 * el-input:
 *    numType: {
 *        输入的数字类型
 *          float: 浮点数，保留小数点后两位
 *          integer: 整数
 *    }
 *
 */
export default {
  props: {
    form: {
      //表单默认内容
      type: Object,
      default: () => {
        return {};
      }
    },
    rules: {
      //表单验证
      type: Object,
      default: () => {
        return {};
      }
    },
    formItemList: {
      //表单内容项配置
      type: Array,
      default: () => {
        return [];
      }
    },
    formType: {
      //表单样式，默认block
      type: Boolean,
      default: () => {
        return false;
      }
    },
    formWidth: {
      type: String,
      default: () => {
        return "100%";
      }
    },
    labelWidth: {
      type: String,
      default: () => {
        return "100px";
      }
    },
    isShowBtn: {
      type: Boolean,
      default: () => {
        return true;
      }
    },
    isShowExportBtn: {
      type: Boolean,
      default: () => {
        return false;
      }
    },
    isDisabled: {
      type: Boolean,
      default: () => {
        return false;
      }
    },
    btnInfo: {
      type: Object,
      default: () => {
        return {
          sure: "查 询",
          cancel: "重 置"
        };
      }
    }
  },
  data() {
    return {
      selectedOptions: [],
      porpsItem: {
        children: "subs",
        label: "name",
        value: "code"
      }
    };
  },
  mounted() {
    this.$nextTick(() => {
      let width = document.getElementsByClassName("disInline")[0].children[0]
        .clientWidth;
      this.$emit("formItemWidth", width);
    });
  },
  methods: {
    handleSelect(label, val, prop) {
      //下拉数据
      this.$emit("handleSelect", { label: label, value: val, prop: prop });
    },
    handleSelectBlur(prop) {
      //获取select信息
      this.focusSelect = prop;
    },
    handleSelectClear(prop) {
      //select清空时事件
      this.$emit("handleSelectClear", prop);
    },
    resetForm() {
      this.$refs["form"].resetFields();
      this.$emit("handleSubmit", this.form);
    },
    clearValidate() {
      this.$refs["form"].clearValidate();
    },
    changeRadio(val) {
      this.$emit("changeRadio", val);
    },
    onSubmit() {
      return new Promise(resolve => {
        this.$refs["form"].validate(valid => {
          if (valid) {
            this.$emit("handleSubmit", this.form);
            resolve(this.form);
          }
        });
      });
    }
  }
};
</script>

<style lang="scss">
.form {
  padding-top: 20px;
  .title {
    font-size: 16px;
    font-weight: bold;
    text-align: left;
    color: #2196ed;
  }
  .appendInput {
    //当input有后缀时，input框
    width: 200px;
  }
  .disInline {
    display: inline;
  }
  .disBlock {
    display: block;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .hideItem {
    background: red;
    height: 200px;
    width: 100px;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .upload {
    position: relative;
    .el-icon-close {
      position: absolute;
      font-weight: bolder;
      color: red;
      z-index: 30;
      left: 107px;
      top: -9px;
      cursor: pointer;
    }
  }
  .el-upload__tip {
    margin-top: -10px;
    color: #f56c6c;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 120px;
    height: 120px;
    line-height: 120px;
    text-align: center;
    border: 1px dashed #dcdfe6;
    margin-left: 0;
  }
  .avatar {
    width: 120px;
    height: 120px;
    display: block;
  }
  .radioBox.disInline {
    margin-left: 20px;
  }
  .el-input-group__append,
  .el-input-group__prepend {
    background-color: transparent;
    border-color: transparent;
    padding: 0 10px 0 10px;
  }
  .isContent {
    width: 170px;
    display: inline-block;
  }
}
</style>
