import { shallowMount } from "@vue/test-utils";
import Subdomain from "@/components/Subdomain.vue";

window.alert = jest.fn();

describe("Subdomain.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(Subdomain, {
      propsData: { propMessage: msg }
    });
    // expect(wrapper.find('md-card-actions')).toMatch(msg);
  });
});