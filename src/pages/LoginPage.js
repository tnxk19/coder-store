import React from "react";
import {
  Box,
  Button,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { FormProvider, FTextField } from "../components/form";
import useAuth from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
});

const defaultValues = {
  username: "",
};

function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const { handleSubmit } = methods;

  const onSubmit = (data) => {
    const from = location.state?.from?.pathname || "/";

    auth.login(data.username, () => {
      navigate(from, { replace: true });
    });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#f5f5f5",
      }}
    >
      <Paper
        elevation={8}
        sx={{
          width: 400,
          p: 5,
          borderRadius: 3,
        }}
      >
        <Stack spacing={3} alignItems="center">

          <Typography variant="h4" fontWeight="bold" >
            Welcome Back
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            textAlign="center"
          >
            Please enter your username to continue
          </Typography>

          <FormProvider
            methods={methods}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Stack spacing={3} width="100%">
              <FTextField
                name="username"
                label="Username"
                fullWidth
              />

              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                sx={{
                  py: 1.5,
                  borderRadius: 2,
                  fontWeight: "bold",
                }}
              >
                Login
              </Button>
            </Stack>
          </FormProvider>
        </Stack>
      </Paper>
    </Box>
  );
}

export default LoginPage;