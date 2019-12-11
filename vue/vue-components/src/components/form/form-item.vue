<template>
  <div>
    <label>
      <div>
        <slot></slot>
      </div>
    </label>
  </div>
</template>

<script>
import Emitter from "../../mixins/emitter";
import AsyncValidator from "async-validator";
export default {
  name: "iFormItem",
  mixins: [Emitter],
  inject: ['form'],
  props: {
    label: {
      type: String,
      default: ""
    },
    prop: {
      type: String
    }
  },
  data() {
    return {
      validatorState: "", //校验状态
      validatorMessage: "" //校验不通过的提示信息
    };
  },
  computed: {
    fieldValue() {
      return this.form.model[this.prop];
    }
  },
  // 组件渲染时，将实例缓存到form
  mounted() {
    if (this.prop) {
      this.dispatch("iForm", "on-form-item-add", this);
      // 设置初始值
      this.initialValue = this.fieldValue
      this.setRules();
    }
  },
  beforeDestroy() {
    this.dispatch("iForm", "on-form-item-remove", this);
  },
  methods: {
    setRules() {
      this.$on("on-form-blur", this.onFieldBlur);
      this.$on("on-form-change", this.onFieldChage);
    },
    // 从 Form 的 rules 属性中，获取当前 FormItem 的校验规则
    getRules() {
      let formRules = this.form.rules;
      formRules = formRules ? formRules[this.prop] : [];
      return [].concat(formRules || []);
    },
    // 只支持 blur 和 change，所以过滤出符合要求的 rule 规则
    getFilteredRule(trigger) {
      const rules = this.getRules();
      return rules.filter(
        rule => !rule.trigger || rule.trigger.indexOf(trigger) !== -1
      );
    },
    validate(trigger, callback = function() {}) {
      let rules = this.getFilteredRule(trigger);
      if (!rules || rules.length === 0) {
        return true;
      }
      // 设置状态为校验中
      this.validateState = "validating";
      // 以下为 async-validator 库的调用方法
      let descriptor = {};
      descriptor[this.prop] = rules;
      const validator = new AsyncValidator(descriptor);
      let model = {};
      model[this.prop] = this.fieldValue;
      validator.validate(model, { firstFields: true }, errors => {
        this.validateState = !errors ? "success" : "error";
        this.validateMessage = errors ? errors[0].message : "";
        callback(this.validateMessage);
      });
    },
    // 重置数据
    resetField() {
      this.validateState = "";
      this.validateMessage = "";
      this.form.model[this.prop] = this.initialValue;
    },
    onFieldBlur() {
      this.validate("blur");
    },
    onFieldChange() {
      this.validate("change");
    }
  }
};
</script>

<style>
</style>