const { sequelize } = require('./database');
const Client = require('./models/Client')(sequelize);
const Deliverable = require('./models/Deliverable')(sequelize);
const Department = require('./models/Department')(sequelize);
const DepartmentArea = require('./models/DepartmentArea')(sequelize);
const Employee = require('./models/Employee')(sequelize);
const GeneralArea = require('./models/GeneralArea')(sequelize);
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
const OfferRequest = require('./models/OfferRequest')(sequelize);
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
const SavertecaRequest = require('./models/SavertecaRequest')(sequelize);


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

DepartmentArea.belongsTo(Employee, { foreignKey: 'director_id', as: 'director' });
Employee.hasMany(DepartmentArea, { foreignKey: 'director_id', as: 'directed_department_areas' });

GeneralArea.hasMany(Department, { foreignKey: 'general_area_id', as: 'departments' });
Department.belongsTo(GeneralArea, { foreignKey: 'general_area_id', as: 'general_area' });

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

Offer.belongsTo(Employee, { foreignKey: 'created_by', as: 'creator' });
Offer.belongsTo(Employee, { foreignKey: 'updated_by', as: 'editor' });
Offer.belongsTo(Client, { foreignKey: 'client_id', as: 'client' });
Client.hasMany(Offer, { foreignKey: 'client_id', as: 'offers' });
Offer.belongsTo(OfferStage, { foreignKey: 'stage' });
Offer.belongsTo(OfferLossReason, { foreignKey: 'loss_reason' });

OfferRequest.belongsTo(OfferStage, { foreignKey: 'current_stage' });
OfferRequest.belongsTo(OfferStage, { foreignKey: 'next_stage' });
OfferRequest.belongsTo(Employee, { foreignKey: 'created_by', as: 'creator' });
OfferRequest.belongsTo(Employee, { foreignKey: 'accepted_by', as: 'supervisor' });
OfferRequest.belongsTo(Offer, { foreignKey: 'offer_id', as: 'offer' });

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


module.exports = {
    sequelize,
    Client,
    Deliverable,
    Department,
    DepartmentArea,
    Employee,
    GeneralArea,
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
    OfferRequest,
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
    SavertecaRequest

};
