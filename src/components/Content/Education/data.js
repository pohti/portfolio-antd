import { SafetyCertificateOutlined } from '@ant-design/icons'

export const education_data = [
  {
    date: 'Apr 2017 - Sep 2020',
    title: 'Bachelor of Computing, Information Technology',
    subtitle: 'University of Wollongong (SIM)'
  },
  {
    date: 'Apr 2012 - Mar 2015',
    title: 'Diploma in Electrical and Electronic Engineering',
    subtitle: 'Singapore Polytechnic'
  },
]

export const certificate_data = [
  {
    date: 'Nov 2021',
    title: "AWS Certified: Solutions Architect - Associate",
    description: (
      <a className="verified-cert-icon"
        href="https://www.credly.com/badges/ae147b5d-4b9e-4d89-b4d0-1c8c62df61ec"
        rel="noreferrer"
        target="_blank"
      >
        Click to see verified certificate <SafetyCertificateOutlined />
      </a>
    )
  },
  {
    date: 'Feb 2021',
    title: " Microsoft Certified: Azure Fundamentals",
    description: (
      <a
        className="verified-cert-icon"
        href="https://www.credly.com/badges/043c1163-0a49-445c-bad1-23431b5c7084"
        rel="noreferrer"
        target="_blank"
      >
        Click to see verified certificate <SafetyCertificateOutlined />
      </a>
    )
  },
]