---
title: Kobo Toolbox
---

## Overview
[Kobo Toolbox](https://www.kobotoolbox.org/) is a suite of open source tools for field data collection for use in challenging environments. If you've worked on ODK or ONA, the underlying tech is very similar. They offer free accounts and hosting for humanitarian projects, and the app provides a nice interface for managing (and cleaning!) form submissions.

:::note

Tool docs are (1) to ensure all OpenFn can more quickly and easily integrate
with common tools, and (2) to educate any OpenFn user/the wider sector.

:::

## Integration Use Cases

Example user stories: 
- As a M&E manager, I want to monitor Kobo Toolbox survey responses in real-time in a central database, so that I can better understand data collection activities and program performance across my partner sites.
- ...
.

## Integration Options

1. Webhook or “REST Service” that will forward data to OpenFn.
Note: for Kobo, this will not forward any cleaned data. 


2. Timer OpenFn jobs that run on cron schedule and “GET” data from Kobo API. 
If you are cleaning data in Kobo, we recommend this option.


### Kobo Web API

Kobo APIs support both data and metadata integration. Check out: 
- Kobo API docs: https://support.kobotoolbox.org/api.html
- Kobo Community: https://support.kobotoolbox.org/rest_services.html
- Kobo API v2 explorer: https://kf.kobotoolbox.org/api/v2/assets/

### Webhook service to forward submission data to OpenFn endpoint (or another app)
See the official docs here: https://support.kobotoolbox.org/rest_services.html

1. To push data from Kobo, users must click the projects icon on their left-side
   nav bar. It's in the shape of a globe.
2. Once selecting a project, the `Project Settings` link will appear at the top
   left side of the screen. Click it to open the Project Settings page.
3. In the bottom left pane of the project settings page, users must paste their
   inbox URL from OpenFn into the `Rest Services` `Service URL` input area and
   select `JSON Post` as the `Service Name`.
4. It's helpful to add a wrapper to your form data if you will be publishing
   multiple forms to OpenFn. You could use
   `{"form":"my_form", "body": %SUBMISSION%}`.
5. Click `Add Service` to start forwarding new Kobo submissions to OpenFn.org.

To test to integration, add a submission manually using the
`enter data in browser` button. Head back to your history page at OpenFn to view
the newly submitted data and write a new `filter` and `job` to map your Kobo
data to any destination system on OpenFn.

Here's a sample post from Kobo REST service. Note that questions inside groups
are prefixed with `groupname/` rather than sitting inside a group object like
ODK:

```json
{
  "meta/instanceID": "uuid:19d72997-8316-4e02-8016-4a8ddf6a2aa4",
  "group1/name": "twenty",
  "group1/age": "19",
  "formhub/uuid": "6f5773a110b046cb97e3d71f6c04e7a6",
  "first_q": "hello",
  "final_q": "why not?",
  "_xform_id_string": "groups",
  "_uuid": "19d72997-8316-4e02-8016-4a8ddf6a2aa4",
  "_userform_id": "taylordowns2000_groups",
  "_tags": [],
  "_submitted_by": null,
  "_submission_time": "2016-04-22T06:38:20",
  "_status": "submitted_via_web",
  "_notes": [],
  "_id": 889409,
  "_geolocation": [null, null],
  "_bamboo_dataset_id": "",
  "_attachments": []
}
```

## Integration Help

# Getting Started with Kobo  

The project space
![The Kobo project space](/img/kobo-project-space.png)

Creating forms

Submitting data

Cleaning data

Kobo form and submission IDs

1. Kobo-generated identifiers
"formId": "adiNTJXFtpKEDGGZFMUtgQ" → unique form instance
"_id": 85252496 → form submission, unique across Kobo server
"_uuid" → changes every time submission is cleaned; not recommended


2. Custom Ids - build your own
"GeneratedUuid":"..."

## OpenFn Adaptor

Check out
[OpenFn/language-kobotoolbox](https://www.github.com/openfn/language-kobotoolbox) for some helper functions for extracting or "getting" data in bulk from Kobo Toolbox. 

## Integration Examples

See the `ConSoSci` Github repo for several example Kobo-to-database jobs: https://github.com/OpenFn/consosci
