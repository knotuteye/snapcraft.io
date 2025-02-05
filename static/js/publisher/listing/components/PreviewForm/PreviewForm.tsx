import React from "react";
import { Form } from "@canonical/react-components";

type Props = {
  listingData: {
    snap_name: string;
    title: string;
    summary: string;
    description: string;
    website: string;
    contact: string;
    categories: Array<string>;
    images: Array<string>;
    public_metrics_enabled: boolean;
    public_metrics_blacklist: Array<string>;
    license: boolean;
    video_urls: string;
  };
};

function PreviewForm({ listingData }: Props) {
  return (
    <Form
      id="preview-form"
      action={`/${listingData?.snap_name}/preview`}
      method="POST"
      encType="multipart/form-data"
      className="u-hide"
      target="_blank"
    >
      <input type="hidden" name="csrf_token" defaultValue={window.CSRF_TOKEN} />
      <input
        type="hidden"
        name="state"
        defaultValue={JSON.stringify(listingData)}
      />
    </Form>
  );
}

export default PreviewForm;
