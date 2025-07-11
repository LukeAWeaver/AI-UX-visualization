import { useState } from 'react';
import { Typography } from '@mui/material';
import { useUser } from '@hooks/useUser';
import { validateUsername } from '@utils/validation';
import { createUser, IUserResponse } from '@services/api';
import { InputField } from '@compound/form/InputField';
import { Button } from '@components/Button';
import { Body2, FormCard } from '@ui/components';

export const LoginForm = () => {
  const { setUserData } = useUser();
  const [username, setUsername] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateUsername(username);
    
    if (!validation.isValid) {
      setError(validation.error || 'Invalid username');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const userData: IUserResponse = await createUser(username);
      setUserData(userData.username, userData.uuid);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create user');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FormCard maxWidth={400}>
      <Typography variant="h5" component="h1" gutterBottom>
        Welcome! Set Your Username
      </Typography>
      <Body2 color="text.secondary" sx={{ mb: 3 }}>
        Please choose a username to get started. This will be your unique identifier.
      </Body2>
      <form onSubmit={(e) => { void handleSubmit(e); }} style={{ marginTop: 16 }}>
        <InputField
          label="Username"
          value={username}
          onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setUsername(e.target.value);
            setError(null);
          }}
          error={error || undefined}
          required
          autoComplete="off"
          id="login-username"
        />
        <Button
          variant="contained"
          onClick={e => { void handleSubmit(e); }}
          fullWidth
          disabled={isLoading}
        >
          {isLoading ? 'Creating...' : 'Create Account'}
        </Button>
      </form>
    </FormCard>
  );
}; 