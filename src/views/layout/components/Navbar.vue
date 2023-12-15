<template>
  <div>
    <el-menu class="navbar" mode="horizontal">
      <hamburger
        class="hamburger-container"
        :toggleClick="toggleSideBar"
        :isActive="sidebar.opened"
      ></hamburger>
      <el-select
        v-model="parkId"
        placeholder="请选择车场"
        @change="onChangePark"
      >
        <el-option
          :label="item.parkName"
          :value="item.parkId"
          v-for="item in parktList"
          :key="item.parkId"
        ></el-option>
      </el-select>
      <breadcrumb></breadcrumb>
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <el-image class="avatar" :src="defalutAvatar"></el-image>
          <span>{{ userInfo.phone }}</span>
          <i class="el-icon-caret-bottom"></i>
        </div>
        <el-dropdown-menu class="user-dropdown" slot="dropdown">
          <el-dropdown-item>
            <span @click="dialogVisible = true" style="display: block"
              >修改密码</span
            >
          </el-dropdown-item>
          <el-dropdown-item divided>
            <span @click="logout" style="display: block">退出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-menu>

    <el-dialog title="修改密码" :visible.sync="dialogVisible" width="30%">
      <el-form ref="form" :model="form" label-width="150px" :rules="rules">
        <el-form-item label="输入旧密码" prop="oldPassword">
          <el-input type="password" v-model="form.oldPassword"></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="password1">
          <el-input type="password" v-model="form.password1"></el-input>
        </el-form-item>
        <el-form-item label="确认新密码" prop="password2">
          <el-input type="password" v-model="form.password2"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleCancel">取 消</el-button>
        <el-button type="primary" @click="handleUpdatePwd">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Breadcrumb from "@/components/Breadcrumb";
import Hamburger from "@/components/Hamburger";
import avatar from "../../../assets/avatar.png";
import md5 from "js-md5";
import { updatePwd } from "@/api/login";

export default {
  components: {
    Breadcrumb,
    Hamburger,
  },
  computed: {
    ...mapGetters(["sidebar", "avatar","userInfo","parkId"]),
  },
  data() {
    return {
      defalutAvatar: avatar,
      dialogVisible: false,
      parktList: [],
      form: {
        oldPassword: "",
        password1: "",
        password2: "",
      },
      rules: {
        oldPassword: [
          {
            required: true,
            message: "请输入密码",
            trigger: "change",
          },
        ],
        password1: [
          {
            required: true,
            message: "请输入密码",
            trigger: "change",
          },
        ],
        password2: [
          {
            required: true,
            message: "请输入密码",
            trigger: "change",
          },
        ],
      },
    };
  },
  async created() {
     this.parktList = this.userInfo.list;
  },
  methods: {
    onChangePark(val) {
      this.$store.commit("parkId", val);
    },
    toggleSideBar() {
      this.$store.dispatch("ToggleSideBar");
    },
    logout() {
      this.$confirm("确定退出?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        localStorage.clear();
        this.$router.replace("/login");
      });
    },
    handleCancel() {
      this.dialogVisible = false;
      this.$refs["form"].resetFields();
    },
    handleUpdatePwd() {
      this.$refs["form"].validate((valid) => {
        if (valid) {
          const { oldPassword, password1, password2 } = this.form;
          if (password1 != password2) {
            return this.$message.error("新密码前后输入不一致");
          }
          if (oldPassword == password2) {
            return this.$message.error("新密码不能和旧密码一致");
          }
          let userInfo = sessionStorage.getItem("userInfo");
          userInfo = JSON.parse(userInfo);
          updatePwd({
            userName: userInfo.userName,
            password: md5(password1),
            oldPassword: md5(oldPassword),
          }).then((res) => {
            if (res.code == 200) {
              this.$message({
                message: "修改成功",
                type: "success",
              });
            }
          });
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;
  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
  }
  .screenfull {
    position: absolute;
    right: 90px;
    top: 16px;
    color: red;
  }
  .avatar-container {
    height: 50px;
    display: inline-block;
    position: absolute;
    right: 35px;
    .avatar-wrapper {
      cursor: pointer;
      margin-top: 5px;
      position: relative;
      .user-avatar {
        width: 40px;
        height: 40px;
        border-radius: 10px;
      }
      .el-icon-caret-bottom {
        position: absolute;
        right: -20px;
        top: 18px;
        font-size: 12px;
      }
    }
  }
  .avatar {
    width: 30px;
    height: 30px;
    position: relative;
    top: 5px;
  }
}
</style>

<style>
.navbar .el-select {
  position: relative;
  top: -20px;
  line-height: 40px;
}
.navbar .el-input__inner {
  height: 30px !important;
  line-height: 30px !important;
  padding: 5px;
}
.navbar .el-input__suffix {
  right: 10px;
}
</style>
