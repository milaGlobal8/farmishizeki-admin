import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import ErrorIcon from "../../assets/icons/error.svg";
import LoginIcon from "../../assets/icons/login.svg";
import SuccessIcon from "../../assets/icons/success.svg";
import {
  Box,
  Button,
  Flexbox,
  Form,
  Image,
  Input,
  Typography,
} from "../../components/common";
import { Loading, Version } from "../../components/screen";
import { COLOR } from "../../constants/color";
import { useLogin } from "../../hooks/useAuth";
import styles from "./Login.module.scss";
import { LoginProps } from "./Login.types";

const Login = () => {
  // useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<LoginProps>();

  // state
  const [isCheck, setIsCheck] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const { email, password } = watch();

  // hooks
  const { success, error, isLoading, login } = useLogin();

  useEffect(() => {
    if (email && password && isCheck) {
      setIsComplete(true);
    }
  }, [email, password, isCheck]);

  // ログイン関数
  // const onSubmit: SubmitHandler<LoginProps> = (data) => login(data);
  const onSubmit: SubmitHandler<LoginProps> = (data) => {
    const allValuesSet = Object.values(data).every(
      (value) => value !== undefined && value !== null && value !== ""
    );

    if (allValuesSet && isComplete) {
      login(data);
    }
  };

  return (
    <Box width={343} paddingX={16} marginX="auto" marginTop={100}>
      {isLoading ? (
        <Loading loadingMsg="処理中です。しばらくお待ちください。" />
      ) : (
        <Form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <Image
            className={styles.login_icon}
            src={LoginIcon}
            alt="ログインアイコン"
          />
          <Typography fontSize="x-large">ログイン</Typography>
          {error && (
            <Typography
              bgColor={COLOR.ERROR1}
              color={COLOR.ERROR2}
              display="flex"
              justifyContent="space-between"
              alignItems="end"
              gap={10}
              paddingX={16}
              paddingY={6}
              borderRadius={4}
            >
              <Image
                className={styles.error_icon}
                src={ErrorIcon}
                alt="エラーアイコン"
              />
              ログインできませんでした
            </Typography>
          )}
          {success && (
            <Typography
              bgColor={COLOR.SUCCESS1}
              color={COLOR.SUCCESS2}
              display="flex"
              justifyContent="space-between"
              alignItems="end"
              gap={10}
              paddingX={16}
              paddingY={6}
              borderRadius={4}
            >
              <Image
                className={styles.success_icon}
                src={SuccessIcon}
                alt="サクセスアイコン"
              />
              ログインに成功しました
            </Typography>
          )}
          <Input
            className="email"
            autoComplete="email"
            autoFocus={true}
            id="email"
            placeholder="メールアドレス"
            type="email"
            borderWidth={1}
            borderStyle="solid"
            height={56}
            width={343}
            register={register}
            registerOptions={{
              pattern:
                /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/,
            }}
          />
          <Input
            className="password"
            autoComplete="current-password"
            id="password"
            placeholder="パスワード（8文字以上）"
            type="password"
            borderWidth={1}
            borderStyle="solid"
            height={56}
            width={343}
            register={register}
            registerOptions={{
              minLength: {
                value: 8,
                message: "8文字以上で入力してください。",
              },
            }}
          />
          {errors.password?.message && (
            <Typography color={COLOR.RED1}>
              {errors.password?.message}
            </Typography>
          )}
          <Flexbox gap={4}>
            <input
              style={{ display: "block" }}
              type="checkbox"
              onChange={() => setIsCheck(!isCheck)}
            />
            <Typography marginTop={3} color={COLOR.BLUE1} family="sans-serif">
              すべて入力しましたか？
            </Typography>
          </Flexbox>
          <Button
            className="login_button"
            type="submit"
            bgColor={COLOR.ORANGE1}
            color={COLOR.W1}
            height={36}
            width={343}
            marginTop={24}
            textAlign="center"
            borderRadius={4}
            disabled={!isComplete}
          >
            ログイン
          </Button>
        </Form>
      )}
      {/* アプリバージョン情報 */}
      {!isLoading && (
        <Version>
          <Typography>Version 0.1.0</Typography>
        </Version>
      )}
    </Box>
  );
};

export default Login;
