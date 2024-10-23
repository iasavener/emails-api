const { sequelize } = require('./database');
const Client = require('./models/Client')(sequelize);
const Deliverable = require('./models/Deliverable')(sequelize);
const Department = require('./models/Department')(sequelize);
const DepartmentArea = require('./models/DepartmentArea')(sequelize);
const Employee = require('./models/Employee')(sequelize);
const GeneralArea = require('./models/GeneralArea')(sequelize);
const GeneralSubArea = require('./models/GeneralSubArea')(sequelize);
const PlatformPermission = require('./models/PlatformPermission')(sequelize);
const PlatformPermissionAllowed = require('./models/PlatformPermissionAllowed')(sequelize);
const PlatformSection = require('./models/PlatformSection')(sequelize);
const PlatformSectionAllowed = require('./models/PlatformSectionAllowed')(sequelize);
const Project = require('./models/Project')(sequelize);
const ProjectDeliverable = require('./models/ProjectDeliverable')(sequelize);
const ProjectEmployee = require('./models/ProjectEmployee')(sequelize);
const Role = require('./models/Role')(sequelize);
const Task = require('./models/Task')(sequelize);
const TimeRecord = require('./models/TimeRecord')(sequelize);
const WorkPackage = require('./models/WorkPackage')(sequelize);
const ProjectStage = require('./models/ProjectStage')(sequelize);
const ProjectStagesAssigned = require('./models/ProjectStagesAssigned')(sequelize);
const ProjectWorkPackage = require('./models/ProjectWorkPackage')(sequelize);
const WorkPackageDeliverable = require('./models/WorkPackageDeliverable')(sequelize);
const EmployeeWorkShift = require('./models/EmployeeWorkShift')(sequelize);
const PlatformSubSectionAllowed = require('./models/PlatformSubSectionAllowed')(sequelize);
const PlatformSubSection = require('./models/PlatformSubSection')(sequelize);
const DeliverableTag = require('./models/DeliverableTag')(sequelize);
const TimeAllocationRequest = require('./models/TimeAllocationRequest')(sequelize);
const Resource = require('./models/Resource')(sequelize); 
const Document = require('./models/Document')(sequelize); 
const DocumentEmployee = require('./models/DocumentEmployee')(sequelize);
const Sector = require('./models/Sector')(sequelize);
const Provider = require('./models/Provider')(sequelize);
const ProviderContact = require('./models/ProviderContact')(sequelize);
const ClientContact = require('./models/ClientContact')(sequelize);
const Country = require('./models/Country')(sequelize);
const Language = require('./models/Language')(sequelize);
const ClientSector = require('./models/ClientSector')(sequelize);
const ProviderSector = require('./models/ProviderSector')(sequelize);
const New = require('./models/New')(sequelize);
const NewMessage = require('./models/NewMessage')(sequelize);
const Offer = require('./models/Offer')(sequelize);
const OfferLossReason = require('./models/OfferLossReason')(sequelize);
const OfferStage = require('./models/OfferStage')(sequelize);
const GeneralConversation = require('./models/GeneralConversation')(sequelize);
const GeneralConversationMessage = require('./models/GeneralConversationMessage')(sequelize);
const SupportTicket = require('./models/SupportTicket')(sequelize);
const SupportArea = require('./models/SupportArea')(sequelize);
const WorkTool = require('./models/WorkTool')(sequelize);
const TypeExpenseNote = require('./models/TypeExpenseNote')(sequelize);
const TypeVacation = require('./models/TypeVacation')(sequelize);
const TypePaidLeave = require('./models/TypePaidLeave')(sequelize);
const PurchaseType = require('./models/PurchaseType')(sequelize);
const SavertecaRequest = require('./models/SavertecaRequest')(sequelize);
const SavertecaRequestEmployee = require('./models/SavertecaRequestEmployee')(sequelize);
const OperationalSoftwareInstallationRequest = require('./models/OperationalSoftwareInstallationRequest')(sequelize);
const NonOperationalSoftwareInstallationRequest = require('./models/NonOperationalSoftwareInstallationRequest')(sequelize);
const WorkToolRequest = require('./models/WorkToolRequest')(sequelize);
const WorkToolReturnRequest = require('./models/WorkToolReturnRequest')(sequelize);
const CvRequest = require('./models/CvRequest')(sequelize);
const ExpenseNotesProjectRequest = require('./models/ExpenseNotesProjectRequest')(sequelize);
const ExpenseNotesProjectRequestAttachment = require('./models/ExpenseNotesProjectRequestAttachment')(sequelize);
const ExpenseNotesProjectRequestEmployee = require('./models/ExpenseNotesProjectRequestEmployee')(sequelize);
const ExpenseNotesOfferRequest = require('./models/ExpenseNotesOfferRequest')(sequelize);
const ExpenseNotesOfferRequestAttachment = require('./models/ExpenseNotesOfferRequestAttachment')(sequelize);
const ExpenseNotesOfferRequestEmployee = require('./models/ExpenseNotesOfferRequestEmployee')(sequelize);
const ExpenseNotesProjectRequestType = require('./models/ExpenseNotesProjectRequestType')(sequelize);
const ExpenseNotesOfferRequestType = require('./models/ExpenseNotesOfferRequestType')(sequelize);
const OfferEmployee = require('./models/OfferEmployee')(sequelize);
const Notification = require('./models/Notification')(sequelize);
const Reminder = require('./models/Reminder')(sequelize);
const OperationalHolidayRequest = require('./models/OperationalHolidayRequest')(sequelize);
const OperationalHolidayRequestEmployee = require('./models/OperationalHolidayRequestEmployee')(sequelize);
const NonOperationalHolidayRequest = require('./models/NonOperationalHolidayRequest')(sequelize);
const NonOperationalHolidayRequestEmployee = require('./models/NonOperationalHolidayRequestEmployee')(sequelize);
const OperationalPaidLeaveRequest = require('./models/OperationalPaidLeaveRequest')(sequelize);
const OperationalPaidLeaveRequestAttachment = require('./models/OperationalPaidLeaveRequestAttachment')(sequelize);
const OperationalPaidLeaveRequestEmployee = require('./models/OperationalPaidLeaveRequestEmployee')(sequelize);
const NonOperationalPaidLeaveRequest = require('./models/NonOperationalPaidLeaveRequest')(sequelize);
const NonOperationalPaidLeaveRequestAttachment = require('./models/NonOperationalPaidLeaveRequestAttachment')(sequelize);
const NonOperationalPaidLeaveRequestEmployee = require('./models/NonOperationalPaidLeaveRequestEmployee')(sequelize);
const StructuralPurchaseRequest = require('./models/StructuralPurchaseRequest')(sequelize);
const StructuralPurchaseRequestAttachment = require('./models/StructuralPurchaseRequestAttachment')(sequelize);
const StructuralPurchaseRequestEmployee = require('./models/StructuralPurchaseRequestEmployee')(sequelize);
const ProjectPurchaseRequest = require('./models/ProjectPurchaseRequest')(sequelize);
const ProjectPurchaseRequestAttachment = require('./models/ProjectPurchaseRequestAttachment')(sequelize);
const ProjectPurchaseRequestEmployee = require('./models/ProjectPurchaseRequestEmployee')(sequelize);
const ManagementPurchaseRequest = require('./models/ManagementPurchaseRequest')(sequelize);
const ManagementPurchaseRequestAttachment = require('./models/ManagementPurchaseRequestAttachment')(sequelize);
const ManagementPurchaseRequestEmployee = require('./models/ManagementPurchaseRequestEmployee')(sequelize);
const OperationalDepartmentPurchaseRequest = require('./models/OperationalDepartmentPurchaseRequest')(sequelize);
const OperationalDepartmentPurchaseRequestAttachment = require('./models/OperationalDepartmentPurchaseRequestAttachment')(sequelize);
const OperationalDepartmentPurchaseRequestEmployee = require('./models/OperationalDepartmentPurchaseRequestEmployee')(sequelize);
const NonOperationalDepartmentPurchaseRequest = require('./models/NonOperationalDepartmentPurchaseRequest')(sequelize);
const NonOperationalDepartmentPurchaseRequestAttachment = require('./models/NonOperationalDepartmentPurchaseRequestAttachment')(sequelize);
const NonOperationalDepartmentPurchaseRequestEmployee = require('./models/NonOperationalDepartmentPurchaseRequestEmployee')(sequelize);
const OperationalSoftwareInstallationRequestEmployee = require('./models/OperationalSoftwareInstallationRequestEmployee')(sequelize);
const NonOperationalSoftwareInstallationRequestEmployee = require('./models/NonOperationalSoftwareInstallationRequestEmployee')(sequelize);
const WorkToolRequestEmployee = require('./models/WorkToolRequestEmployee')(sequelize);
const WorkToolReturnRequestEmployee = require('./models/WorkToolReturnRequestEmployee')(sequelize);
const EducationPill = require('./models/EducationPill')(sequelize);

Employee.hasMany(Project, { foreignKey: 'project_manager_id', as: 'managed_projects' });
Project.belongsTo(Employee, { foreignKey: 'project_manager_id', as: 'project_manager' });

Project.belongsTo(Employee, { foreignKey: 'created_by', as: 'creator' });
Project.belongsTo(Employee, { foreignKey: 'updated_by', as: 'editor' });

Client.hasMany(Project, { foreignKey: 'client_id', as: 'projects' });
Project.belongsTo(Client, { foreignKey: 'client_id', as: 'client' });
Client.belongsTo(Employee, { foreignKey: 'created_by', as: 'creator' });
Client.belongsTo(Employee, { foreignKey: 'updated_by', as: 'editor' });

Resource.belongsTo(Employee, { foreignKey: 'uploaded_by', as: 'editor' });
Document.belongsTo(Employee, { foreignKey: 'uploaded_by', as: 'editor' });


PlatformSection.hasMany(PlatformPermission, { foreignKey: 'platform_section_id', as: 'permissions' });
PlatformPermission.belongsTo(PlatformSection, { foreignKey: 'platform_section_id', as: 'section' });

GeneralArea.belongsTo(Employee, { foreignKey: 'director_id', as: 'director' });
Employee.hasMany(GeneralArea, { foreignKey: 'director_id', as: 'directed_general_areas' });

GeneralSubArea.belongsTo(Employee, { foreignKey: 'director_id', as: 'director' });
Employee.hasMany(GeneralSubArea, { foreignKey: 'director_id', as: 'directed_general_sub_areas' });

DepartmentArea.belongsTo(Employee, { foreignKey: 'director_id', as: 'director' });
Employee.hasMany(DepartmentArea, { foreignKey: 'director_id', as: 'directed_department_areas' });

GeneralArea.hasMany(Department, { foreignKey: 'general_area_id', as: 'departments' });
Department.belongsTo(GeneralArea, { foreignKey: 'general_area_id', as: 'general_area' });

GeneralArea.hasMany(GeneralSubArea, { foreignKey: 'general_area_id', as: 'general_sub_areas' });
GeneralSubArea.belongsTo(GeneralArea, { foreignKey: 'general_area_id', as: 'general_area' });

GeneralSubArea.hasMany(Department, { foreignKey: 'general_sub_area_id', as: 'departments' });
Department.belongsTo(GeneralSubArea, { foreignKey: 'general_sub_area_id', as: 'general_sub_area' });

Department.hasMany(DepartmentArea, { foreignKey: 'department_id', as: 'department_areas' });
DepartmentArea.belongsTo(Department, { foreignKey: 'department_id', as: 'department' });

Department.belongsTo(Employee, { foreignKey: 'director_id', as: 'director' });
Employee.hasMany(Department, { foreignKey: 'director_id', as: 'directed_departments' });

Department.hasMany(Employee, { foreignKey: 'department_id' });

PlatformPermissionAllowed.belongsTo(Role, { foreignKey: 'role_id' });
PlatformPermissionAllowed.belongsTo(PlatformPermission, { foreignKey: 'platform_permission_id', as: 'platform_permission'});
PlatformSectionAllowed.belongsTo(Role, { foreignKey: 'role_id' });
PlatformSectionAllowed.belongsTo(PlatformSection, { foreignKey: 'platform_section_id', as: 'section' });
PlatformSubSectionAllowed.belongsTo(Role, { foreignKey: 'role_id' });
PlatformSubSectionAllowed.belongsTo(PlatformSubSection, { foreignKey: 'platform_sub_section_id', as: 'sub_section' });
PlatformPermission.belongsTo(PlatformSection, { foreignKey: 'platform_section_id' });
PlatformPermission.belongsTo(PlatformSubSection, { foreignKey: 'platform_sub_section_id' });
PlatformSubSection.belongsTo(PlatformSection, { foreignKey: 'platform_section_id' });
PlatformSection.hasMany(PlatformSubSection, { foreignKey: 'platform_section_id', as: 'sub_sections' });

Role.hasMany(Employee, { foreignKey: 'role_id', as: 'employees' });
Role.hasMany(PlatformPermissionAllowed, { foreignKey: 'role_id', as: 'permissions_allowed' });
Role.hasMany(PlatformSectionAllowed, { foreignKey: 'role_id', as: 'sections_allowed' });
Role.hasMany(PlatformSubSectionAllowed, { foreignKey: 'role_id', as: 'sub_sections_allowed' });

Employee.belongsTo(Role, { foreignKey: 'role_id', as: 'role' });
Employee.belongsTo(Department, { foreignKey: 'department_id', as: 'department' });
Employee.belongsTo(DepartmentArea, { foreignKey: 'department_id', as: 'department_area' });
Employee.belongsTo(Employee, { foreignKey: 'created_by', as: 'creator' });
Employee.belongsTo(Employee, { foreignKey: 'updated_by', as: 'editor' });
Employee.hasMany(TimeRecord, { foreignKey: 'employee_id', as: 'time_records' });
TimeRecord.belongsTo(Employee, { foreignKey: 'employee_id', as: 'employee' });

Project.belongsToMany(Employee, { through: ProjectEmployee, foreignKey: 'project_id', otherKey: 'employee_id', as: 'employees' });
Employee.belongsToMany(Project, { through: ProjectEmployee, foreignKey: 'employee_id', otherKey: 'project_id', as: 'projects' });

ProjectEmployee.belongsTo(Project, { foreignKey: 'project_id' });
ProjectEmployee.belongsTo(Employee, { foreignKey: 'employee_id' });


Document.belongsToMany(Employee, { through: DocumentEmployee, foreignKey: 'document_id', otherKey: 'employee_id', as: 'employees' });
Employee.belongsToMany(Document, { through: DocumentEmployee, foreignKey: 'employee_id', otherKey: 'document_id', as: 'documents' });

Project.belongsToMany(ProjectStage, { through: ProjectStagesAssigned, foreignKey: 'project_id', otherKey: 'project_stage_id', as: 'stages' });
ProjectStage.belongsToMany(Project, { through: ProjectStagesAssigned, foreignKey: 'project_stage_id', otherKey: 'project_id', as: 'projects' });
ProjectStage.belongsTo(Employee, { foreignKey: 'created_by', as: 'creator' });
ProjectStage.belongsTo(Employee, { foreignKey: 'updated_by', as: 'editor' });

DeliverableTag.hasMany(WorkPackageDeliverable, { foreignKey: 'tag_id' })
WorkPackageDeliverable.belongsTo(DeliverableTag, { foreignKey: 'tag_id' });
DeliverableTag.hasMany(WorkPackageDeliverable, { foreignKey: 'tag_id' })

ProjectDeliverable.belongsTo(WorkPackageDeliverable, { foreignKey: 'work_package_deliverable_id', as: 'work_package_deliverable' });
ProjectDeliverable.belongsTo(ProjectStage, { foreignKey: 'project_stage_id' });

WorkPackageDeliverable.belongsTo(WorkPackage, { foreignKey: 'work_package_id' });

WorkPackageDeliverable.belongsTo(Deliverable, { foreignKey: 'deliverable_id' });
Deliverable.hasMany(WorkPackageDeliverable, { foreignKey: 'deliverable_id' });

TimeAllocationRequest.belongsTo(Project, { foreignKey: 'project_id' });
TimeAllocationRequest.belongsTo(Task, { foreignKey: 'task_id' });
TimeAllocationRequest.belongsTo(Deliverable, { foreignKey: 'deliverable_id' });
TimeAllocationRequest.belongsTo(WorkPackage, { foreignKey: 'work_package_id' });
TimeAllocationRequest.belongsTo(ProjectStage, { foreignKey: 'project_stage_id' });
TimeAllocationRequest.belongsTo(DeliverableTag, { foreignKey: 'tag_id' });

TimeAllocationRequest.belongsTo(Employee, { foreignKey: 'employee_id' });

ProjectStage.belongsToMany(WorkPackage, { through: { model: ProjectWorkPackage, unique: false}, foreignKey: 'project_stage_id', otherKey: 'work_package_id', as: 'work_packages'});
WorkPackage.belongsToMany(ProjectStage, { through: { model: ProjectWorkPackage, unique: false}, foreignKey: 'work_package_id', otherKey: 'project_stage_id', as: 'project_stages'});

Task.belongsTo(Employee, { foreignKey: 'created_by', as: 'creator' });
Task.belongsTo(Employee, { foreignKey: 'updated_by', as: 'editor' });

Sector.belongsTo(Employee, { foreignKey: 'created_by', as: 'creator' });
Sector.belongsTo(Employee, { foreignKey: 'updated_by', as: 'editor' });

Language.belongsTo(Employee, { foreignKey: 'created_by', as: 'creator' });
Language.belongsTo(Employee, { foreignKey: 'updated_by', as: 'editor' });

Country.belongsTo(Employee, { foreignKey: 'created_by', as: 'creator' });
Country.belongsTo(Employee, { foreignKey: 'updated_by', as: 'editor' });

Provider.belongsTo(Employee, { foreignKey: 'created_by', as: 'creator' });
Provider.belongsTo(Employee, { foreignKey: 'updated_by', as: 'editor' });
Provider.belongsTo(Employee, { foreignKey: 'responsible' });

ProviderContact.belongsTo(Employee, { foreignKey: 'created_by', as: 'creator' });
ProviderContact.belongsTo(Employee, { foreignKey: 'updated_by', as: 'editor' });
ProviderContact.belongsTo(Provider, { foreignKey: 'provider' });

ClientContact.belongsTo(Employee, { foreignKey: 'created_by', as: 'creator' });
ClientContact.belongsTo(Employee, { foreignKey: 'updated_by', as: 'editor' });
ClientContact.belongsTo(Client, { foreignKey: 'client' });


DeliverableTag.belongsTo(Employee, { foreignKey: 'created_by', as: 'creator' });
DeliverableTag.belongsTo(Employee, { foreignKey: 'updated_by', as: 'editor' });


Deliverable.belongsTo(Employee, { foreignKey: 'created_by', as: 'creator' });
Deliverable.belongsTo(Employee, { foreignKey: 'updated_by', as: 'editor' });

WorkPackage.belongsTo(Employee, { foreignKey: 'created_by', as: 'creator' });
WorkPackage.belongsTo(Employee, { foreignKey: 'updated_by', as: 'editor' });

WorkPackageDeliverable.belongsTo(Employee, { foreignKey: 'created_by', as: 'creator' });
WorkPackageDeliverable.belongsTo(Employee, { foreignKey: 'updated_by', as: 'editor' });

Client.belongsToMany(Sector, { through: ClientSector, foreignKey: 'client_id', otherKey: 'sector_id', as: 'sectors' });
Sector.belongsToMany(Client, { through: ClientSector, foreignKey: 'sector_id', otherKey: 'client_id', as: 'clients' });
Provider.belongsToMany(Sector, { through: ProviderSector, foreignKey: 'provider_id', otherKey: 'sector_id', as: 'sectors' });
Sector.belongsToMany(Provider, { through: ProviderSector, foreignKey: 'sector_id', otherKey: 'provider_id', as: 'providers' });
Client.belongsTo(Country, { foreignKey: 'country' });
Provider.belongsTo(Country, { foreignKey: 'country' });
ClientContact.belongsTo(Language, { foreignKey: 'language' });
ProviderContact.belongsTo(Language, { foreignKey: 'language' });

New.belongsTo(Employee, { foreignKey: 'created_by', as: 'creator' });
New.belongsTo(Employee, { foreignKey: 'updated_by', as: 'editor' });
New.belongsTo(Employee, { foreignKey: 'published_by', as: 'publisher' });

NewMessage.belongsTo(Employee, { foreignKey: 'employee_id', as: 'emisor' });
NewMessage.belongsTo(New, {foreignKey: 'new_id'});

GeneralConversation.belongsTo(Employee, { foreignKey: 'created_by', as: 'creator' });

GeneralConversationMessage.belongsTo(Employee, { foreignKey: 'employee_id', as: 'emisor' });
GeneralConversationMessage.belongsTo(GeneralConversation, {foreignKey: 'general_conversation_id'});

SupportTicket.belongsTo(Employee, { foreignKey: 'created_by', as: 'creator' });
SupportTicket.belongsTo(SupportArea, { foreignKey: 'support_area', as: 'area' });

WorkTool.belongsTo(Employee, { foreignKey: 'created_by', as: 'creator' });
WorkTool.belongsTo(Employee, { foreignKey: 'updated_by', as: 'editor' });

TypeExpenseNote.belongsTo(Employee, { foreignKey: 'created_by', as: 'creator' });
TypeExpenseNote.belongsTo(Employee, { foreignKey: 'updated_by', as: 'editor' });

TypeVacation.belongsTo(Employee, { foreignKey: 'created_by', as: 'creator' });
TypeVacation.belongsTo(Employee, { foreignKey: 'updated_by', as: 'editor' });

TypePaidLeave.belongsTo(Employee, { foreignKey: 'created_by', as: 'creator' });
TypePaidLeave.belongsTo(Employee, { foreignKey: 'updated_by', as: 'editor' });

SavertecaRequest.belongsTo(Employee, { foreignKey: 'employee_id', as: 'creator' });

SavertecaRequest.hasMany(SavertecaRequestEmployee, {foreignKey: 'request_id'});
SavertecaRequestEmployee.belongsTo(SavertecaRequest, { foreignKey: 'request_id' });
SavertecaRequestEmployee.belongsTo(Employee, { foreignKey: 'employee_id' });


SavertecaRequest.hasMany(Notification, {foreignKey: "saverteca_request_id", as: "saverteca_notifications"});
Notification.belongsTo(SavertecaRequest, { foreignKey: "saverteca_request_id", as: "saverteca_request"});

PurchaseType.belongsTo(Employee, { foreignKey: 'created_by', as: 'creator' });
PurchaseType.belongsTo(Employee, { foreignKey: 'updated_by', as: 'editor' });

OperationalSoftwareInstallationRequest.belongsTo(Employee, { foreignKey: 'employee_id', as: 'creator' });
OperationalSoftwareInstallationRequest.belongsTo(Department, { foreignKey: 'department_id', as: 'department' });

NonOperationalSoftwareInstallationRequest.belongsTo(Employee, { foreignKey: 'employee_id', as: 'creator' });
NonOperationalSoftwareInstallationRequest.belongsTo(Department, { foreignKey: 'department_id', as: 'department' });


WorkToolRequest.belongsTo(Employee, { foreignKey: 'employee_id', as: 'creator' });
WorkToolRequest.belongsTo(WorkTool, { foreignKey: 'work_tool_id', as: 'work_tool' });
WorkToolRequest.belongsTo(Project, { foreignKey: 'project_id', as: 'project' });


ExpenseNotesProjectRequest.belongsTo(Employee, { foreignKey: 'employee_id', as: 'creator' });
ExpenseNotesOfferRequest.belongsTo(Employee, { foreignKey: 'employee_id', as: 'creator' });
ExpenseNotesProjectRequest.belongsTo(Project, { foreignKey: 'project_id', as: 'project' });
ExpenseNotesOfferRequest.belongsTo(Offer, { foreignKey: 'offer_id', as: 'offer' });
ExpenseNotesProjectRequest.hasMany(ExpenseNotesProjectRequestAttachment, {
    foreignKey: 'expense_note_request_id',
    as: 'attachments'
});
ExpenseNotesProjectRequestAttachment.belongsTo(ExpenseNotesProjectRequest, {
    foreignKey: 'expense_note_request_id'
});
ExpenseNotesOfferRequest.hasMany(ExpenseNotesOfferRequestAttachment, {
    foreignKey: 'expense_note_request_id',
    as: 'attachments'
});
ExpenseNotesOfferRequestAttachment.belongsTo(ExpenseNotesOfferRequest, {
    foreignKey: 'expense_note_request_id'
});

ExpenseNotesProjectRequest.hasMany(ExpenseNotesProjectRequestEmployee, {foreignKey: 'request_id'});
ExpenseNotesProjectRequestEmployee.belongsTo(ExpenseNotesProjectRequest, { foreignKey: 'request_id' });
ExpenseNotesProjectRequestEmployee.belongsTo(Employee, { foreignKey: 'employee_id' });

ExpenseNotesOfferRequest.hasMany(ExpenseNotesOfferRequestEmployee, {foreignKey: 'request_id'});
ExpenseNotesOfferRequestEmployee.belongsTo(ExpenseNotesOfferRequest, { foreignKey: 'request_id' });
ExpenseNotesOfferRequestEmployee.belongsTo(Employee, { foreignKey: 'employee_id' });

ExpenseNotesProjectRequest.belongsToMany(TypeExpenseNote, { through: ExpenseNotesProjectRequestType, foreignKey: 'expense_note_request_id', otherKey: 'expense_type_id', as: 'expense_project_types' });
TypeExpenseNote.belongsToMany(ExpenseNotesProjectRequest, { through: ExpenseNotesProjectRequestType, foreignKey: 'expense_type_id', otherKey: 'expense_note_request_id', as: 'expense_note_project_requests' });
ExpenseNotesOfferRequest.belongsToMany(TypeExpenseNote, { through: ExpenseNotesOfferRequestType, foreignKey: 'expense_note_request_id', otherKey: 'expense_type_id', as: 'expense_offer_types' });
TypeExpenseNote.belongsToMany(ExpenseNotesOfferRequest, { through: ExpenseNotesOfferRequestType, foreignKey: 'expense_type_id', otherKey: 'expense_note_request_id', as: 'expense_note_offer_requests' });

ExpenseNotesProjectRequest.hasMany(Notification, {foreignKey: "expense_note_project_request_id", as: "expense_note_project_notifications"});
Notification.belongsTo(ExpenseNotesProjectRequest, { foreignKey: "expense_note_project_request_id", as: "expense_note_project_request"});

ExpenseNotesOfferRequest.hasMany(Notification, {foreignKey: "expense_note_offer_request_id", as: "expense_note_offer_notifications"});
Notification.belongsTo(ExpenseNotesOfferRequest, { foreignKey: "expense_note_offer_request_id", as: "expense_note_offer_request"});

WorkToolReturnRequest.belongsTo(WorkToolRequest, { foreignKey: 'work_tool_request_id', as: 'work_tool_request' });

CvRequest.belongsTo(Employee, { foreignKey: 'employee_id', as: 'employee' });
Employee.hasMany(CvRequest, { foreignKey: 'employee_id', as: 'cv_templates' });

Offer.belongsToMany(Employee, { through: OfferEmployee, foreignKey: 'offer_id', otherKey: 'employee_id', as: 'employees' });
Employee.belongsToMany(Offer, { through: OfferEmployee, foreignKey: 'employee_id', otherKey: 'offer_id', as: 'offers' });


Offer.belongsTo(Employee, { foreignKey: 'created_by', as: 'creator' });
Offer.belongsTo(Employee, { foreignKey: 'updated_by', as: 'editor' });
Offer.belongsTo(Employee, { foreignKey: 'deleted_by', as: 'remover' });
Offer.belongsTo(Employee, { foreignKey: 'technician_id', as: 'technician' });
Offer.belongsTo(Employee, { foreignKey: 'owner_id', as: 'owner' });
Offer.belongsTo(Client, { foreignKey: 'client_id', as: 'client' });
Client.hasMany(Offer, { foreignKey: 'client_id', as: 'offers' });
Offer.belongsTo(OfferStage, { foreignKey: 'stage_id', as: 'stage' });
Offer.belongsTo(OfferStage, { foreignKey: 'origin_stage_id', as: 'origin_stage' });
Offer.belongsTo(OfferLossReason, { foreignKey: 'loss_reason_id', as: 'loss_reason' });
OfferEmployee.belongsTo(Offer, { foreignKey: 'offer_id' });
OfferEmployee.belongsTo(Employee, { foreignKey: 'employee_id', as: 'employee' });
OfferEmployee.belongsTo(Employee, { foreignKey: 'deleted_by', as: 'remover' });
OfferEmployee.belongsTo(Employee, { foreignKey: 'created_by', as: 'creator' });
OfferEmployee.belongsTo(Employee, { foreignKey: 'updated_by', as: 'editor' });

Notification.belongsTo(Employee, {foreignKey: 'created_by', as: 'creator'});
Notification.belongsTo(Employee, {foreignKey: 'recipient_id', as: 'recipient'});
Notification.belongsTo(Employee, {foreignKey: 'sender_id', as: 'sender'});
Notification.belongsTo(Project, { foreignKey: 'project_id', as: 'project' });
Notification.belongsTo(Offer, { foreignKey: 'offer_id', as: 'offer' });
Notification.belongsTo(Client, { foreignKey: 'client_id', as: 'client' });

Reminder.belongsTo(Employee, { foreignKey: 'employee_id', as: 'employee' });

OperationalHolidayRequest.belongsTo(Employee, { foreignKey: 'employee_id', as: 'creator' });
NonOperationalHolidayRequest.belongsTo(Employee, { foreignKey: 'employee_id', as: 'creator' });
OperationalHolidayRequest.belongsTo(TypeVacation, { foreignKey: 'holiday_id', as: 'holiday' });
NonOperationalHolidayRequest.belongsTo(TypeVacation, { foreignKey: 'holiday_id', as: 'holiday' });

OperationalHolidayRequest.hasMany(OperationalHolidayRequestEmployee, {foreignKey: 'request_id'});
OperationalHolidayRequestEmployee.belongsTo(OperationalHolidayRequest, { foreignKey: 'request_id' });
OperationalHolidayRequestEmployee.belongsTo(Employee, { foreignKey: 'employee_id' });
NonOperationalHolidayRequest.hasMany(NonOperationalHolidayRequestEmployee, {foreignKey: 'request_id'});
NonOperationalHolidayRequestEmployee.belongsTo(NonOperationalHolidayRequest, { foreignKey: 'request_id' });
NonOperationalHolidayRequestEmployee.belongsTo(Employee, { foreignKey: 'employee_id' });

OperationalHolidayRequest.hasMany(Notification, {foreignKey: "operational_holiday_request_id", as: "operational_holiday_notifications"});
Notification.belongsTo(OperationalHolidayRequest, { foreignKey: "operational_holiday_request_id", as: "operational_request_request"});

NonOperationalHolidayRequest.hasMany(Notification, {foreignKey: "non_operational_holiday_request_id", as: "non_operational_holiday_notifications"});
Notification.belongsTo(NonOperationalHolidayRequest, { foreignKey: "non_operational_holiday_request_id", as: "non_operational_request_request"});


OperationalPaidLeaveRequest.belongsTo(Employee, {foreignKey: 'employee_id', as: 'creator'});
NonOperationalPaidLeaveRequest.belongsTo(Employee, {foreignKey: 'employee_id', as: 'creator'});
OperationalPaidLeaveRequest.belongsTo(TypePaidLeave, { foreignKey: 'paid_leave_id', as: 'paid_leave' });
NonOperationalPaidLeaveRequest.belongsTo(TypePaidLeave, { foreignKey: 'paid_leave_id', as: 'paid_leave' });
OperationalPaidLeaveRequest.hasMany(OperationalPaidLeaveRequestAttachment, {foreignKey: 'paid_leave_request_id',as: 'attachments'});
OperationalPaidLeaveRequestAttachment.belongsTo(OperationalPaidLeaveRequest, {foreignKey: 'paid_leave_request_id'});
NonOperationalPaidLeaveRequest.hasMany(NonOperationalPaidLeaveRequestAttachment, {foreignKey: 'paid_leave_request_id',as: 'attachments'});
NonOperationalPaidLeaveRequestAttachment.belongsTo(NonOperationalPaidLeaveRequest, {foreignKey: 'paid_leave_request_id'});

OperationalPaidLeaveRequest.hasMany(OperationalPaidLeaveRequestEmployee, {foreignKey: 'request_id'});
OperationalPaidLeaveRequestEmployee.belongsTo(OperationalPaidLeaveRequest, { foreignKey: 'request_id' });
OperationalPaidLeaveRequestEmployee.belongsTo(Employee, { foreignKey: 'employee_id' });
NonOperationalPaidLeaveRequest.hasMany(NonOperationalPaidLeaveRequestEmployee, {foreignKey: 'request_id'});
NonOperationalPaidLeaveRequestEmployee.belongsTo(NonOperationalPaidLeaveRequest, { foreignKey: 'request_id' });
NonOperationalPaidLeaveRequestEmployee.belongsTo(Employee, { foreignKey: 'employee_id' });

OperationalPaidLeaveRequest.hasMany(Notification, {foreignKey: "operational_paid_leave_request_id", as: "operational_paid_leave_notifications"});
Notification.belongsTo(OperationalPaidLeaveRequest, { foreignKey: "operational_paid_leave_request_id", as: "operational_paid_leave_request"});

NonOperationalPaidLeaveRequest.hasMany(Notification, {foreignKey: "non_operational_paid_leave_request_id", as: "non_operational_paid_leave_notifications"});
Notification.belongsTo(NonOperationalPaidLeaveRequest, { foreignKey: "non_operational_paid_leave_request_id", as: "non_operational_paid_leave_request"});



StructuralPurchaseRequest.belongsTo(Employee, {foreignKey: 'employee_id', as: 'creator'});
ProjectPurchaseRequest.belongsTo(Employee, {foreignKey: 'employee_id', as: 'creator'});
ManagementPurchaseRequest.belongsTo(Employee, {foreignKey: 'employee_id', as: 'creator'});
OperationalDepartmentPurchaseRequest.belongsTo(Employee, {foreignKey: 'employee_id', as: 'creator'});
NonOperationalDepartmentPurchaseRequest.belongsTo(Employee, {foreignKey: 'employee_id', as: 'creator'});

StructuralPurchaseRequest.belongsTo(Project, { foreignKey: 'project_id', as: 'project' });
ProjectPurchaseRequest.belongsTo(Project, { foreignKey: 'project_id', as: 'project' });
ManagementPurchaseRequest.belongsTo(Project, { foreignKey: 'project_id', as: 'project' });
OperationalDepartmentPurchaseRequest.belongsTo(Project, { foreignKey: 'project_id', as: 'project' });
NonOperationalDepartmentPurchaseRequest.belongsTo(Project, { foreignKey: 'project_id', as: 'project' });

StructuralPurchaseRequest.hasMany(StructuralPurchaseRequestAttachment, {foreignKey: 'purchase_request_id',as: 'attachments'});
StructuralPurchaseRequestAttachment.belongsTo(StructuralPurchaseRequest, {foreignKey: 'purchase_request_id'});
ProjectPurchaseRequest.hasMany(ProjectPurchaseRequestAttachment, {foreignKey: 'purchase_request_id',as: 'attachments'});
ProjectPurchaseRequestAttachment.belongsTo(ProjectPurchaseRequest, {foreignKey: 'purchase_request_id'});
ManagementPurchaseRequest.hasMany(ManagementPurchaseRequestAttachment, {foreignKey: 'purchase_request_id',as: 'attachments'});
ManagementPurchaseRequestAttachment.belongsTo(ManagementPurchaseRequest, {foreignKey: 'purchase_request_id'});
OperationalDepartmentPurchaseRequest.hasMany(OperationalDepartmentPurchaseRequestAttachment, {foreignKey: 'purchase_request_id',as: 'attachments'});
OperationalDepartmentPurchaseRequestAttachment.belongsTo(OperationalDepartmentPurchaseRequest, {foreignKey: 'purchase_request_id'});
NonOperationalDepartmentPurchaseRequest.hasMany(NonOperationalDepartmentPurchaseRequestAttachment, {foreignKey: 'purchase_request_id',as: 'attachments'});
NonOperationalDepartmentPurchaseRequestAttachment.belongsTo(NonOperationalDepartmentPurchaseRequest, {foreignKey: 'purchase_request_id'});

StructuralPurchaseRequest.belongsTo(PurchaseType, { foreignKey: 'purchase_id', as: 'structural_purchase' });
ProjectPurchaseRequest.belongsTo(PurchaseType, { foreignKey: 'purchase_id', as: 'project_purchase' });
ManagementPurchaseRequest.belongsTo(PurchaseType, { foreignKey: 'purchase_id', as: 'management_purchase' });
OperationalDepartmentPurchaseRequest.belongsTo(PurchaseType, { foreignKey: 'purchase_id', as: 'operational_department_purchase' });
NonOperationalDepartmentPurchaseRequest.belongsTo(PurchaseType, { foreignKey: 'purchase_id', as: 'non_operational_department_purchase' });

StructuralPurchaseRequest.hasMany(StructuralPurchaseRequestEmployee, {foreignKey: 'request_id'});
StructuralPurchaseRequestEmployee.belongsTo(StructuralPurchaseRequest, { foreignKey: 'request_id' });
StructuralPurchaseRequestEmployee.belongsTo(Employee, { foreignKey: 'employee_id' });
StructuralPurchaseRequest.hasMany(Notification, {foreignKey: "structural_purchase_request_id", as: "structural_purchase_notifications"});
Notification.belongsTo(StructuralPurchaseRequest, { foreignKey: "structural_purchase_request_id", as: "structural_purchase_request"});


ProjectPurchaseRequest.hasMany(ProjectPurchaseRequestEmployee, {foreignKey: 'request_id'});
ProjectPurchaseRequestEmployee.belongsTo(ProjectPurchaseRequest, { foreignKey: 'request_id' });
ProjectPurchaseRequestEmployee.belongsTo(Employee, { foreignKey: 'employee_id' });
ProjectPurchaseRequest.hasMany(Notification, {foreignKey: "project_purchase_request_id", as: "project_purchase_notifications"});
Notification.belongsTo(ProjectPurchaseRequest, { foreignKey: "project_purchase_request_id", as: "project_purchase_request"});

ManagementPurchaseRequest.hasMany(ManagementPurchaseRequestEmployee, {foreignKey: 'request_id'});
ManagementPurchaseRequestEmployee.belongsTo(ManagementPurchaseRequest, { foreignKey: 'request_id' });
ManagementPurchaseRequestEmployee.belongsTo(Employee, { foreignKey: 'employee_id' });
ManagementPurchaseRequest.hasMany(Notification, {foreignKey: "management_purchase_request_id", as: "management_purchase_notifications"});
Notification.belongsTo(ManagementPurchaseRequest, { foreignKey: "management_purchase_request_id", as: "management_purchase_request"});

OperationalDepartmentPurchaseRequest.hasMany(OperationalDepartmentPurchaseRequestEmployee, {foreignKey: 'request_id'});
OperationalDepartmentPurchaseRequestEmployee.belongsTo(OperationalDepartmentPurchaseRequest, { foreignKey: 'request_id' });
OperationalDepartmentPurchaseRequestEmployee.belongsTo(Employee, { foreignKey: 'employee_id' });
OperationalDepartmentPurchaseRequest.hasMany(Notification, {foreignKey: "operational_department_purchase_request_id", as: "operational_department_purchase_notifications"});
Notification.belongsTo(OperationalDepartmentPurchaseRequest, { foreignKey: "operational_department_purchase_request_id", as: "operational_department_purchase_request"});

NonOperationalDepartmentPurchaseRequest.hasMany(NonOperationalDepartmentPurchaseRequestEmployee, {foreignKey: 'request_id'});
NonOperationalDepartmentPurchaseRequestEmployee.belongsTo(NonOperationalDepartmentPurchaseRequest, { foreignKey: 'request_id' });
NonOperationalDepartmentPurchaseRequestEmployee.belongsTo(Employee, { foreignKey: 'employee_id' });
NonOperationalDepartmentPurchaseRequest.hasMany(Notification, {foreignKey: "non_operational_department_purchase_request_id", as: "non_operational_department_purchase_notifications"});
Notification.belongsTo(NonOperationalDepartmentPurchaseRequest, { foreignKey: "non_operational_department_purchase_request_id", as: "non_operational_department_purchase_request"});

OperationalSoftwareInstallationRequest.hasMany(OperationalSoftwareInstallationRequestEmployee, {foreignKey: 'request_id'});
OperationalSoftwareInstallationRequestEmployee.belongsTo(OperationalSoftwareInstallationRequest, { foreignKey: 'request_id' });
OperationalSoftwareInstallationRequestEmployee.belongsTo(Employee, { foreignKey: 'employee_id' });

OperationalSoftwareInstallationRequest.hasMany(Notification, {foreignKey: "operational_software_installation_request_id", as: "operational_software_installation_notifications"});
Notification.belongsTo(OperationalSoftwareInstallationRequest, { foreignKey: "operational_software_installation_request_id", as: "operational_software_installation_request"});


NonOperationalSoftwareInstallationRequest.hasMany(NonOperationalSoftwareInstallationRequestEmployee, {foreignKey: 'request_id'});
NonOperationalSoftwareInstallationRequestEmployee.belongsTo(NonOperationalSoftwareInstallationRequest, { foreignKey: 'request_id' });
NonOperationalSoftwareInstallationRequestEmployee.belongsTo(Employee, { foreignKey: 'employee_id' });

NonOperationalSoftwareInstallationRequest.hasMany(Notification, {foreignKey: "non_operational_software_installation_request_id", as: "non_operational_software_installation_notifications"});
Notification.belongsTo(NonOperationalSoftwareInstallationRequest, { foreignKey: "non_operational_software_installation_request_id", as: "non_operational_software_installation_request"});

WorkToolRequest.hasMany(WorkToolRequestEmployee, {foreignKey: 'request_id'});
WorkToolRequestEmployee.belongsTo(WorkToolRequest, { foreignKey: 'request_id' });
WorkToolRequestEmployee.belongsTo(Employee, { foreignKey: 'employee_id' });

WorkToolRequest.hasMany(Notification, {foreignKey: "work_tool_request_id", as: "work_tool_notifications"});
Notification.belongsTo(WorkToolRequest, { foreignKey: "work_tool_request_id", as: "work_tool_request"});

WorkToolReturnRequest.hasMany(WorkToolReturnRequestEmployee, {foreignKey: 'request_id'});
WorkToolReturnRequestEmployee.belongsTo(WorkToolReturnRequest, { foreignKey: 'request_id' });
WorkToolReturnRequestEmployee.belongsTo(Employee, { foreignKey: 'employee_id' });

EducationPill.belongsTo(Employee, { foreignKey: 'created_by', as: 'creator' });
EducationPill.belongsTo(Employee, { foreignKey: 'updated_by', as: 'editor' });


module.exports = {
    sequelize,
    Client,
    Deliverable,
    Department,
    DepartmentArea,
    Employee,
    GeneralArea,
    GeneralSubArea,
    PlatformPermission,
    PlatformSection,
    PlatformSectionAllowed,
    Project,
    ProjectDeliverable,
    ProjectEmployee,
    EmployeeWorkShift,
    Role,
    Task,
    TimeRecord,
    WorkPackage,
    Deliverable,
    ProjectStage,
    ProjectStagesAssigned,
    ProjectWorkPackage,
    WorkPackageDeliverable,
    PlatformSectionAllowed,
    PlatformSubSection,
    PlatformPermissionAllowed,
    PlatformSubSectionAllowed,
    DeliverableTag,
    TimeAllocationRequest,
    Resource,
    Document,
    DocumentEmployee,
    Sector,
    Provider,
    ProviderContact,
    ClientContact,
    Country,
    Language,
    ClientSector,
    ProviderSector,
    New,
    NewMessage,
    Offer,
    OfferLossReason,
    OfferStage,
    GeneralConversation,
    GeneralConversationMessage,
    SupportTicket,
    SupportArea,
    WorkTool,
    TypeExpenseNote,
    TypeVacation,
    TypePaidLeave,
    SavertecaRequest,
    SavertecaRequestEmployee,
    PurchaseType,
    OperationalSoftwareInstallationRequest,
    OperationalSoftwareInstallationRequestEmployee,
    NonOperationalSoftwareInstallationRequest,
    NonOperationalSoftwareInstallationRequestEmployee,
    WorkToolRequest,
    WorkToolReturnRequest,
    CvRequest,
    ExpenseNotesProjectRequest,
    ExpenseNotesProjectRequestAttachment,
    ExpenseNotesProjectRequestEmployee,
    ExpenseNotesOfferRequest,
    ExpenseNotesOfferRequestAttachment,
    ExpenseNotesOfferRequestEmployee,
    ExpenseNotesProjectRequestType,
    ExpenseNotesOfferRequestType,
    OfferEmployee,
    Notification,
    Reminder,
    OperationalHolidayRequest,
    OperationalHolidayRequestEmployee,
    NonOperationalHolidayRequest,
    NonOperationalHolidayRequestEmployee,
    OperationalPaidLeaveRequest,
    OperationalPaidLeaveRequestAttachment,
    OperationalPaidLeaveRequestEmployee,
    NonOperationalPaidLeaveRequest,
    NonOperationalPaidLeaveRequestAttachment,
    NonOperationalPaidLeaveRequestEmployee,
    StructuralPurchaseRequest,
    StructuralPurchaseRequestAttachment,
    StructuralPurchaseRequestEmployee,
    ProjectPurchaseRequest,
    ProjectPurchaseRequestAttachment,
    ProjectPurchaseRequestEmployee,
    ManagementPurchaseRequest,
    ManagementPurchaseRequestAttachment,
    ManagementPurchaseRequestEmployee,
    OperationalDepartmentPurchaseRequest,
    OperationalDepartmentPurchaseRequestAttachment,
    OperationalDepartmentPurchaseRequestEmployee,
    NonOperationalDepartmentPurchaseRequest,
    NonOperationalDepartmentPurchaseRequestAttachment,
    NonOperationalDepartmentPurchaseRequestEmployee,
    WorkToolRequestEmployee,
    WorkToolReturnRequestEmployee,
    EducationPill
    
};
