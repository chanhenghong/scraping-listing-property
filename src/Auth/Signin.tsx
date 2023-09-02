import { RenderInput, RenderPassword } from "./components";
import { Stack, Typography, Link } from "@mui/material";
import { AuthLayout } from "../Layouts/AuthLayout";
import LoadingButton from "@mui/lab/LoadingButton";
import { Form, Field } from "react-final-form";
const SignIn = () => {
  return (
    <div>
      <AuthLayout title="Sign in" description="First, enter your email.">
        <Stack spacing={1.5}>
          <RenderInput label="Email" type="email" size="small" fullWidth />
          <RenderPassword
            name="password"
            label="Password"
            type="password"
            size="small"
            fullWidth
          />
          <Stack pt={2}>
            <LoadingButton
              variant="contained"
              sx={{ backgroundColor: "#4eaec9" }}
            >
              Continue
            </LoadingButton>
            <Typography
              variant="h6"
              pt={1}
              sx={{
                fontWeight: 300,
                fontSize: "15px",
                lineHeight: "32px",
              }}
            >
              Note yet have an account?{" "}
              <Link href="/auth/signup">
                <span style={{ color: "#4eaec9" }}>Sign up</span>
              </Link>
            </Typography>
          </Stack>
        </Stack>
      </AuthLayout>
    </div>
  );
};
export default SignIn;
