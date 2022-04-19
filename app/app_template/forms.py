from django import forms


class LoginForm(forms.Form):
    email = forms.CharField(
        label="Email",
        max_length=255,
        widget=forms.EmailInput(attrs={"id": "login-email", "class": "input", "data-login-target": "email"})
    )
    password = forms.CharField(
        label="Password",
        max_length=255,
        widget=forms.PasswordInput(attrs={"id": "login-password", "class": "input", "data-login-target": "password"})
    )


class SignupForm(forms.Form):
    username = forms.CharField(
        label="Username",
        max_length=255,
        widget=forms.TextInput(attrs={"id": "signup-username", "class": "input", "data-signup-target": "username"})
    )
    email = forms.EmailField(
        label="Email",
        max_length=255,
        widget=forms.EmailInput(attrs={"id": "signup-email", "class": "input", "data-signup-target": "email"})
    )
    password = forms.CharField(
        label="Password",
        max_length=255,
        widget=forms.PasswordInput(attrs={"id": "signup-password", "class": "input", "data-signup-target": "password"})
    )
    password_confirm = forms.CharField(
        label="Confirm Password",
        max_length=255,
        widget=forms.PasswordInput(
            attrs={"id": "signup-password-confirm", "class": "input", "data-signup-target": "passwordConfirm"}
        ),
    )
