import { describe, it, expect, beforeEach } from 'vitest';
import { flushPromises } from '@vue/test-utils';
import waitForExpect from 'wait-for-expect';
import { setActivePinia, createPinia } from 'pinia';
import { mount } from '@vue/test-utils';
import SignIn from '@/views/SignIn.vue';
import { router } from '../../routes';
describe('SignIn component', () => {
	beforeEach(() => {
		setActivePinia(createPinia());
	});
	it('Renders the component without any trouble', () => {
		const wrapper = mount(SignIn, {
			global: {
				plugins: [router],
			},
		});
		expect(wrapper.text()).toContain('Iniciar sesión');
	});
	it('Displays an error message when submitting', async () => {
		const wrapper = mount(SignIn, {
			global: {
				plugins: [router],
			},
		});
		const input = wrapper.find('input');

		input.setValue('');
		const error = wrapper.find('span');
		await flushPromises();
		await waitForExpect(() => {
			expect(error.text()).toBeTruthy();
		});
	});
});
