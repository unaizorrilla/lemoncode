
import { mapProjectFromApiToVm } from './project.mapper';
import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';

describe('the project mapper spec suite', () => {
  it('should return empty project view model when project api model is null or undefined', () => {
    var emptyProjectViewModel = viewModel.createEmptyProject();

    const projectViewModel = mapProjectFromApiToVm(undefined);
    expect(projectViewModel).toEqual(emptyProjectViewModel)

    const projectViewModel2 = mapProjectFromApiToVm(null);
    expect(projectViewModel2).toEqual(emptyProjectViewModel)

  });
  it('should map project from api model to view model ', () => {

    var emptyProjectViewModel = viewModel.createEmptyProject();

    const projectApiModel : apiModel.Project = {
      id: '1',
      name: 'Project 1',
      externalId: 'EXT-1',
      comments: 'Comments for Project 1',
      isActive: true,
      employees: [
        { id: '1', employeeName: 'Employee 1', isAssigned: true },
        { id: '2', employeeName: 'Employee 2' }
      ]
    };

    const projectViewModel = mapProjectFromApiToVm(projectApiModel);

    expect(projectViewModel).not.toEqual(emptyProjectViewModel);
    expect(projectViewModel).toEqual({
      id: '1',
      name: 'Project 1',
      externalId: 'EXT-1',
      comments: 'Comments for Project 1',
      isActive: true,
      employees: [
        { id: '1', employeeName: 'Employee 1', isAssigned: true },
        { id: '2', employeeName: 'Employee 2' }
      ]
    });
  });

  it('should map project with empty employees array', () => {
    const projectApiModel: apiModel.Project = {
      id: '1',
      name: 'Project 1',
      isActive: true,
      employees: [],
    };

    const result = mapProjectFromApiToVm(projectApiModel);

    expect(result.employees).toEqual([]);
    expect(result.id).toBe('1');
  });

  it('should map project without optional fields', () => {
    const projectApiModel: apiModel.Project = {
      id: '1',
      name: 'Project 1',
      isActive: false,
      employees: [],
    };

    const result = mapProjectFromApiToVm(projectApiModel);

    expect(result.externalId).toBeUndefined();
    expect(result.comments).toBeUndefined();
  });

  it('should not return the same reference (immutability)', () => {
    const projectApiModel: apiModel.Project = {
      id: '1',
      name: 'Project 1',
      isActive: true,
      employees: [{ id: 'e1', employeeName: 'John' }],
    };

    const result = mapProjectFromApiToVm(projectApiModel);

    expect(result).not.toBe(projectApiModel);
    expect(result.employees).not.toBe(projectApiModel.employees);
  });
});
