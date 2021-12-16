import { Routes, Route } from 'react-router-dom'

import DashboardLayout from './components/layouts/DashboardLayout'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import MySchedulePage from './pages/MySchedulePage'
import MyPatientPage from './pages/MyPatientPage'

import InClinicConsultationPage from './pages/in-clinic-consultation/InClinicConsultationPage'
import InClinicConsultationDetailPage from './pages/in-clinic-consultation/inClinicConsultationDetailPage'
import ICEmbryoPage from 'pages/in-clinic-consultation/details/EmbryoPage'
import ICIdentityPage from 'pages/in-clinic-consultation/details/IdentityPage'
import ICInformedConsentPage from 'pages/in-clinic-consultation/details/InformedConsentPage'

import ICInitialInfoPage from 'pages/in-clinic-consultation/details/initial-info/InitialInfoPage'
import ICEditHealthInfoPage from 'pages/in-clinic-consultation/details/initial-info/EditHealthInfoPage'
import ICEditPartnerHealthInfoPage from 'pages/in-clinic-consultation/details/initial-info/EditPartnerHealthInfoPage'

import ICLaboratoriumPage from 'pages/in-clinic-consultation/details/LaboratoriumPage'

import ICMedicalNotePage from 'pages/in-clinic-consultation/details/medical-note/MedicalNotePage'
import ICAddMedicalNotePage from 'pages/in-clinic-consultation/details/medical-note/AddMedicalNotePage'
import ICEditMedicalNotePage from 'pages/in-clinic-consultation/details/medical-note/EditMedicalNotePage'

import ICPrescriptionPage from 'pages/in-clinic-consultation/details/prescription/PrescriptionPage'
import ICAddPrescriptionPage from 'pages/in-clinic-consultation/details/prescription/AddPrescriptionPage'

import ICProcedurePage from 'pages/in-clinic-consultation/details/ProcedurePage'
import ICReferPatientPage from 'pages/in-clinic-consultation/details/ReferPatientPage'
import ICReferralDataPage from 'pages/in-clinic-consultation/details/ReferralDataPage'

import OnlineConsultationPage from 'pages/online-consultation/OnlineConsultationPage'
import OnlineConsultationDetailPage from 'pages/online-consultation/OnlineConsultationDetailPage'
import SurgeryPage from 'pages/surgery/SurgeryPage'
import SurgeryDetailPage from 'pages/surgery/SurgeryDetailPage'
import IdentityPage from 'pages/surgery/details/IdentityPage'
import PatientSafetyPage from 'pages/surgery/details/PatientSafetyPage'
import AnasthesiaReportPage from 'pages/surgery/details/AnasthesiaReportPage'
import SurgeryReportPage from 'pages/surgery/details/SurgeryReportPage'
import HomeMonitoringPage from 'pages/home-monitoring/HomeMonitoringPage'
import HomeMonitoringDetailPage from 'pages/home-monitoring/HomeMonitoringDetailPage'

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="my-schedule" element={<MySchedulePage />} />
        <Route path="my-patient" element={<MyPatientPage />} />
        <Route
          path="in-clinic-consultation"
          element={<InClinicConsultationPage />}
        />
        <Route
          path="in-clinic-consultation/:id"
          element={<InClinicConsultationDetailPage />}
        >
          <Route path="identity" element={<ICIdentityPage />} />
          <Route path="referral-data" element={<ICReferralDataPage />} />
          <Route path="initial-info" element={<ICInitialInfoPage />} />
          <Route
            path="initial-info/health-info/edit"
            element={<ICEditHealthInfoPage />}
          />
          <Route
            path="initial-info/partner-health-info/edit"
            element={<ICEditPartnerHealthInfoPage />}
          />
          <Route path="medical-note" element={<ICMedicalNotePage />} />
          <Route path="medical-note/add" element={<ICAddMedicalNotePage />} />
          <Route
            path="medical-note/:medicalNoteId/edit"
            element={<ICEditMedicalNotePage />}
          />
          <Route path="laboratorium" element={<ICLaboratoriumPage />} />
          <Route path="prescription" element={<ICPrescriptionPage />} />
          <Route path="prescription/add" element={<ICAddPrescriptionPage />} />
          <Route path="procedure" element={<ICProcedurePage />} />
          <Route path="embryo" element={<ICEmbryoPage />} />
          <Route path="refer-patient" element={<ICReferPatientPage />} />
          <Route path="informed-consent" element={<ICInformedConsentPage />} />
        </Route>
        <Route
          path="online-consultation"
          element={<OnlineConsultationPage />}
        />
        <Route
          path="online-consultation/:id"
          element={<OnlineConsultationDetailPage />}
        >
          <Route path="identity" element={<ICIdentityPage />} />
          <Route path="referral-data" element={<ICReferralDataPage />} />
          <Route path="initial-info" element={<ICInitialInfoPage />} />
          <Route path="medical-note" element={<ICMedicalNotePage />} />
          <Route path="laboratorium" element={<ICLaboratoriumPage />} />
          <Route path="prescription" element={<ICPrescriptionPage />} />
          <Route path="procedure" element={<ICProcedurePage />} />
          <Route path="embryo" element={<ICEmbryoPage />} />
          <Route path="refer-patient" element={<ICReferPatientPage />} />
          <Route path="informed-consent" element={<ICInformedConsentPage />} />
        </Route>

        <Route path="surgery" element={<SurgeryPage />} />
        <Route path="surgery/:id" element={<SurgeryDetailPage />}>
          <Route path="identity" element={<IdentityPage />} />
          <Route path="patient-safety" element={<PatientSafetyPage />} />
          <Route path="anesthesia-report" element={<AnasthesiaReportPage />} />
          <Route path="surgery-report" element={<SurgeryReportPage />} />
        </Route>
        <Route path="home-monitoring" element={<HomeMonitoringPage />} />
        <Route
          path="home-monitoring/:id"
          element={<HomeMonitoringDetailPage />}
        />
      </Route>
    </Routes>
  )
}
