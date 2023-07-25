import { EmailOutlined, Google, PasswordOutlined } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";

export const LoginPage = () => {
  return (
    <AuthLayout>
      <form>
        <Typography variant='h5' sx={{ mb: 1 }}>
          Welcome to Notes
        </Typography>
        <Typography sx={{ mb: 1 }}>
          Continue whith Google or enter you details.
        </Typography>
        <Grid container>
          <Grid item xs={12}>
            <Button variant='outlined' color='outLine' fullWidth>
              <Google />
              <Typography sx={{ ml: 2 }}>Continue with Google</Typography>
            </Button>
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <Grid container xs={12}>
              <Grid item xs={1}>
                <EmailOutlined />
              </Grid>
              <Grid itemxs={11}>
                <Typography item xs={12}>
                  Email
                </Typography>
              </Grid>
            </Grid>
            <TextField
              type='email'
              fullWidth
              id='filled-basic'
              // label='Correo Electrónico'
              placeholder='example@example.com'
              color='secondary'
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <Grid container xs={12}>
              <Grid item xs={1}>
                <PasswordOutlined />
              </Grid>
              <Grid item xs={11}>
                <Typography item xs={12}>
                  Password
                </Typography>
              </Grid>
            </Grid>
            <TextField
              type='password'
              fullWidth
              id='filled-basic'
              // label='Contraseña'
              placeholder='*********'
              // variant='filled'
              color='secondary'
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant='contained'
              color='backgroundButton'
              sx={{ mt: 4, height: "50px" }}
              fullWidth
            >
              Log in
            </Button>
          </Grid>
          <Grid container direction='row' sx={{ mt: 2 }}>
            <Link component={RouterLink} color='inherit' to='/auth/register'>
              Create Account
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
