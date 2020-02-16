import React from 'react';
import { fireEvent, render} from '@testing-library/react';

import ProfileWizardView from './profile-wizard-view'


test('weight input mask', () => {
    const instance = render(<ProfileWizardView />);
    const labelWeight = 'Qual o seu peso?';
    const weightInput = instance.getByLabelText(labelWeight);

    expect( weightInput ).toBeInTheDocument();

    fireEvent.change(weightInput, { target: { value: '76' } });

    expect(weightInput.value).toBe('76kg');
});

test('height input mask', () => {
    const instance = render(<ProfileWizardView />);
    const labelWeight = 'Qual sua altura?';
    const weightInput = instance.getByLabelText(labelWeight);

    expect( weightInput ).toBeInTheDocument();

    fireEvent.change(weightInput, { target: { value: '176' } });

    expect(weightInput.value).toBe('1,76m');
});